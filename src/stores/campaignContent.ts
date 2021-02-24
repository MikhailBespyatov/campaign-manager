import axios, { CancelTokenSource } from 'axios';
import { defaultCampaignContentValues } from 'constants/defaults';
import { combine, createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';
import { initialToggleStore } from 'stores/initialize/initialie.toggle.store';

let cancelToken: CancelTokenSource | undefined;

const updateInitialLoading = createEvent();
const setInitialLoading = createEvent<boolean>();

const initialLoading = createStore<boolean>(false)
    .on(updateInitialLoading, state => !state)
    .on(setInitialLoading, (_, newState) => newState);

// const updateLoading = createEvent();
// const setLoading = createEvent<boolean>();

// const loading = createStore<boolean>(false)
//     .on(updateLoading, state => !state)
//     .on(setLoading, (_, newState) => newState);

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.campaignContent.getItemById({ contentId: id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const getItems = createEffect({
    handler: async (values: WOM.ContentQueryRequest) => {
        try {
            cancelToken && cancelToken.cancel();
            cancelToken = axios.CancelToken.source();

            updateInitialLoading();
            const data = await API.campaignContent.getItems(values, cancelToken.token);
            updateInitialLoading();

            return data || {};
        } catch {
            updateInitialLoading();
            return {};
        }
    }
});

const getSelectedVideos = createEffect({
    handler: async (contentIds: string[]) => {
        try {
            updateInitialLoading();
            const data = await API.campaignContent.getItems({
                pageIndex: 0,
                limit: 100,
                byContentIds: contentIds
            });
            updateInitialLoading();

            return data || {};
        } catch {
            updateInitialLoading();
            return {};
        }
    }
});

const item = createStore<WOM.ContentItemResponse>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.ContentQueryResponse>({}).on(getItems.doneData, (_, newState) => newState);

const combinedItems = combine(items, initialLoading);

const campaignSelectedVideos = createStore<WOM.ContentQueryResponse>({}).on(
    getSelectedVideos.doneData,
    (_, newState) => newState
);

const updateIsFirst = createEvent();
const setIsFirstToTrue = createEvent();
const isFirst = createStore<boolean>(true)
    .on(updateIsFirst, state => !state)
    .on(setIsFirstToTrue, () => true);

const updateValues = createEvent<WOM.ContentQueryRequestValues>();
const updateAndRemoveValues = createEvent<WOM.UpdateAndRemoveCampaignContentValues>();
const setDefaultValues = createEvent();

// values store keeps request values,
// after updating or removing some fields of the values,
// watcher initiate getItems request due the new values
// (old fields of values are not removed if they are not pointed as remove values in removeAndUpdateValues event)
const values = createStore<WOM.ContentQueryRequest>(defaultCampaignContentValues)
    .on(updateValues, (state, values: WOM.ContentQueryRequestValues) => ({ ...state, ...values }))
    .on(updateAndRemoveValues, (state, values: WOM.UpdateAndRemoveCampaignContentValues) => {
        let formerState = state;
        values.removeValues.forEach(
            //@ts-ignore
            key => formerState.hasOwnProperty(key) && delete formerState[key]
        );

        return { ...formerState, ...values.updateValues };
    })
    .on(setDefaultValues, () => defaultCampaignContentValues);
values.watch(updateValues, state => getItems(state));
values.watch(updateAndRemoveValues, state => getItems(state));
values.watch(setDefaultValues, state => getItems(state));

const [visibleCreateCampaign, setVisibleCreateCampaign] = initialToggleStore();

const campaignContentEvents = {
    updateValues,
    updateAndRemoveValues,
    setDefaultValues,
    updateIsFirst,
    setIsFirstToTrue,
    setVisibleCreateCampaign
};
const campaignContentEffects = { getItems, getItemById, getSelectedVideos };
const campaignContentStores = {
    items,
    item,
    values,
    initialLoading,
    campaignSelectedVideos,
    isFirst,
    visibleCreateCampaign,
    combinedItems
};

export { campaignContentEffects, campaignContentStores, campaignContentEvents };
