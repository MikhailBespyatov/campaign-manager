import { createEffect, createStore } from 'effector';
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

            return data.items ? data.items : [];
        } catch {
            loadingEffects.updateInitialLoading();
            return [];
        }
    }
});

const item = createStore<WOM.ContentItemResponse | {}>({}).on(getItemById.doneData, (_, newState) => newState);
const items = createStore<WOM.ContentItemResponse[]>([]).on(getItems.doneData, (_, newState) => newState);

const campaignContentEvents = {};
const campaignContentEffects = { getItems, getItemById };
const campaignContentStores = { items, item };

export { campaignContentEffects, campaignContentStores, campaignContentEvents };
