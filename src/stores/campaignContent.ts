import { defaultCampaignContentValues } from 'constants/defaults/campaignContent';
import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

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
            loadingEffects.updateInitialLoading();
            const data = await API.campaignContent.getItems(values);
            loadingEffects.updateInitialLoading();

            return data ? data : {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const item = createStore<WOM.ContentItemResponse>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.ContentQueryResponse>({}).on(getItems.doneData, (_, newState) => newState);

const updateValues = createEvent<WOM.ContentQueryRequest>();
const updateAndRemoveValues = createEvent<WOM.UpdateAndRemoveCampaignContentValues>();
const setDefaultValues = createEvent();

let isFirst = true;
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
values.watch(state => (isFirst ? (isFirst = false) : getItems(state)));

const campaignContentEvents = { updateValues, updateAndRemoveValues, setDefaultValues };
const campaignContentEffects = { getItems, getItemById };
const campaignContentStores = { items, item };

export { campaignContentEffects, campaignContentStores, campaignContentEvents };
