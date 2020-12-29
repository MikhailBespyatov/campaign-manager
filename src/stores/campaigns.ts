import history from 'BrowserHistory';
import { CreateCampaignRequestProps, Props } from 'components/FormComponents/forms/CreateCampaignForm/types';
import { noop } from 'constants/global';
import { existCampaignErrorMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { createEffect, createEvent, createStore, forward } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { getCampaignStatus } from 'utils/usefulFunctions';
import { defaultCampaignStatusStore } from 'constants/defaults';
import { formValues } from 'components/FormComponents/forms/CreateCampaignForm/constants';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const addContentIds = createEvent<WOM.ContentItemResponse[]>();
const pushContentId = createEvent<WOM.ContentItemResponse>();
const removeContentById = createEvent<string>();
const clearContentIds = createEvent();

const contentIds = createStore<WOM.ContentItemResponse[]>([])
    .on(addContentIds, (state, newState) => [...state, ...newState])
    .on(pushContentId, (state, newState) =>
        state.map(i => i.womContentId).includes(newState.womContentId) ? state : [...state, newState]
    )
    .on(removeContentById, (state, id) => state.filter(i => i.womContentId !== id))
    .on(clearContentIds, () => []);

const upsertItem = createEffect({
    handler: async ({ values, setErrors = noop }: CreateCampaignRequestProps) => {
        try {
            loadingEffects.updateLoading();
            await API.campaigns.upsertItem(values);
            loadingEffects.updateLoading();

            clearContentIds();
            history.push(themeStores.globalPrefixUrl.getState() + routes.campaignManager.campaign.running);
        } catch {
            loadingEffects.updateLoading();
            setErrors({
                title: existCampaignErrorMessage
            });
        }
    }
});

const itemRemoveEvent = createEvent<string>();
const removeItemById = createEffect({
    handler: async (id: string) => {
        try {
            updateLoading();
            await API.campaigns.upsertItem({
                id,
                organizationId: organizationsStores.organizationId.getState(),
                //@ts-ignore
                isHidden: true
            });
            updateLoading();

            itemRemoveEvent(id);
        } catch {
            updateLoading();
        }
    }
});

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            updateLoading();
            const data = await API.campaigns.getItemById({ campaignId: id });
            updateLoading();

            return data;
        } catch {
            updateLoading();
            return {};
        }
    }
});

const getItems = createEffect({
    handler: async (values: WOM.CampaignsQueryRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.campaigns.getItems(values);
            loadingEffects.updateInitialLoading();

            return data ? data : {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const getStatisticsItems = createEffect({
    handler: async (values: WOM.CampaignStatisticsQueryRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.campaigns.getStatisticsItems(values);
            loadingEffects.updateInitialLoading();

            return data ? data : {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const getItemsInUseById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.campaigns.getItemsByContentId({
                contentId: id,
                organizationId: organizationsStores.organizationId.getState()
            });
            loadingEffects.updateInitialLoading();

            return data ? data : [];
        } catch {
            loadingEffects.updateInitialLoading();
            return [];
        }
    }
});

const itemsInUse = createStore<WOM.CampaignDetailResponse[]>([]).on(
    getItemsInUseById.doneData,
    (_, newState) => newState
);

const item = createStore<WOM.CampaignDetailResponse>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.CampaignsQueryResponse>({})
    .on(getItems.doneData, (_, newState) => newState)
    .on(itemRemoveEvent, (state, id) => ({ ...state, items: state.items?.filter(i => i.id !== id) || [] }));
const statisticsItems = createStore<WOM.CampaignStatisticsQueryResponse>({}).on(
    getStatisticsItems.doneData,
    (_, newState) => newState
);

const setCampaignStatusCount = createEvent<WOM.CampaignsQueryResponse>();
const campaignStatusCount = createStore(defaultCampaignStatusStore).on(setCampaignStatusCount, (_, { items }) => {
    const count = Object.assign({}, defaultCampaignStatusStore);
    items?.forEach(item => (count[getCampaignStatus(item)] = count[getCampaignStatus(item)] + 1));
    return count;
});

forward({
    from: items,
    to: setCampaignStatusCount
});
// campaignStatusCount.watch(items, (state, { items }) => {
//     const count = Object.assign({}, state);
//     items?.forEach(item => (count[getCampaignStatus(item)] = count[getCampaignStatus(item)] + 1));
//     return count;
// });

const updateStatisticsValues = createEvent<WOM.CampaignStatisticsQueryRequest>();
const updateAndRemoveStatisticsValues = createEvent<WOM.UpdateAndRemoveCampaignStatisticsValues>();
//const setDefaultStatisticsValues = createEvent();

// values store keeps request values,
// after updating or removing some fields of the values,
// watcher initiate getItems request due the new values
// (old fields of values are not removed if they are not pointed as remove values in removeAndUpdateValues event)
let isFirst = true;
const statisticsValues = createStore<WOM.CampaignStatisticsQueryRequest>({})
    .on(updateStatisticsValues, (state, values: WOM.CampaignStatisticsQueryRequest) => ({ ...state, ...values }))
    .on(updateAndRemoveStatisticsValues, (state, values: WOM.UpdateAndRemoveCampaignStatisticsValues) => {
        let formerState = state;
        values.removeValues.forEach(
            //@ts-ignore
            key => formerState.hasOwnProperty(key) && delete formerState[key]
        );

        return { ...formerState, ...values.updateValues };
    });
//.on(setDefaultValues, () => defaultCampaignContentValues);
statisticsValues.watch(state => (isFirst ? (isFirst = false) : getStatisticsItems(state)));

const setFieldCreateCampaignForm = createEvent<Partial<Props>>();
const setContentIds = createEvent<WOM.ContentItemResponse[]>();
const createCampaignForm = createStore<Props>(formValues)
    .on(setContentIds, (state, contentIds) => ({ ...state, contentIds: contentIds.map(i => i.womContentId || '') }))
    .on(setFieldCreateCampaignForm, (store, state) => ({
        ...store,
        ...state
    }));

forward({ from: contentIds, to: setContentIds });

const campaignsEvents = {
    updateStatisticsValues,
    updateAndRemoveStatisticsValues,
    addContentIds,
    clearContentIds,
    pushContentId,
    removeContentById,
    setFieldCreateCampaignForm
};
const campaignsEffects = { getItems, getItemById, getStatisticsItems, upsertItem, removeItemById, getItemsInUseById };
const campaignsStores = {
    items,
    item,
    statisticsItems,
    contentIds,
    loading,
    itemsInUse,
    campaignStatusCount,
    createCampaignForm
};

export { campaignsEffects, campaignsStores, campaignsEvents };
