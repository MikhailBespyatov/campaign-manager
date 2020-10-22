import { defaultCampaignContentValues } from 'constants/defaults/campaignContent';
import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

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
            updateInitialLoading();
            const data = await API.campaignContent.getItems(values);
            updateInitialLoading();

            return data ? data : {};
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

            return data ? data : {};
        } catch {
            updateInitialLoading();
            return {};
        }
    }
});

const item = createStore<WOM.ContentItemResponse>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.ContentQueryResponse>({}).on(getItems.doneData, (_, newState) => newState);

const campaignSelectedVideos = createStore<WOM.ContentQueryResponse>({}).on(
    getSelectedVideos.doneData,
    (_, newState) => newState
);

const updateValues = createEvent<WOM.ContentQueryRequest>();
const updateAndRemoveValues = createEvent<WOM.UpdateAndRemoveCampaignContentValues>();
const setDefaultValues = createEvent();

// values store keeps request values,
// after updating or removing some fields of the values,
// watcher initiate getItems request due the new values
// (old fields of values are not removed if they are not pointed as remove values in removeAndUpdateValues event)
// let isFirst = true;
// !!! types incompatible
// @ts-ignore
const values = createStore<WOM.ContentQueryRequest>(defaultCampaignContentValues)
    .on(updateValues, (state, values: WOM.ContentQueryRequest) => ({ ...state, ...values }))
    .on(updateAndRemoveValues, (state, values: WOM.UpdateAndRemoveCampaignContentValues) => {
        let formerState = state;
        values.removeValues.forEach(
            //@ts-ignore
            key => formerState.hasOwnProperty(key) && delete formerState[key]
        );

        return { ...formerState, ...values.updateValues };
    })
    .on(setDefaultValues, () => defaultCampaignContentValues);
// values.watch(state => (isFirst ? (isFirst = false) : getItems(state)));
values.watch(state => getItems(state));

const campaignContentEvents = { updateValues, updateAndRemoveValues, setDefaultValues };
const campaignContentEffects = { getItems, getItemById, getSelectedVideos };
const campaignContentStores = { items, item, values, initialLoading, campaignSelectedVideos };

export { campaignContentEffects, campaignContentStores, campaignContentEvents };
