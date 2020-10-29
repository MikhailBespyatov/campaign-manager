import history from 'BrowserHistory';
import { CreateCampaignRequestProps } from 'components/FormComponents/forms/CreateCampaignForm/types';
import { noop } from 'constants/global';
import { existCampaignErrorMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';

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
            const { id } = await API.campaigns.upsertItem(values);
            loadingEffects.updateLoading();

            clearContentIds();
            history.push(themeStores.globalPrefixUrl.getState() + routes.campaignManager.campaign.indexDetails + id);
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
            loadingEffects.updateLoading();
            const data = await API.campaigns.getItemById({ campaignId: id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
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

const item = createStore<WOM.CampaignDetailResponse>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.CampaignsQueryResponse>({})
    .on(getItems.doneData, (_, newState) => newState)
    .on(itemRemoveEvent, (state, id) => ({ ...state, items: state.items?.filter(i => i.id !== id) || [] }));
const statisticsItems = createStore<WOM.CampaignStatisticsQueryResponse>({}).on(
    getStatisticsItems.doneData,
    (_, newState) => newState
);

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

const campaignsEvents = {
    updateStatisticsValues,
    updateAndRemoveStatisticsValues,
    addContentIds,
    clearContentIds,
    pushContentId,
    removeContentById
};
const campaignsEffects = { getItems, getItemById, getStatisticsItems, upsertItem, removeItemById };
const campaignsStores = { items, item, statisticsItems, contentIds, loading };

export { campaignsEffects, campaignsStores, campaignsEvents };
