import { createEffect, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

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
const items = createStore<WOM.CampaignsQueryResponse>({}).on(getItems.doneData, (_, newState) => newState);
const statisticsItems = createStore<WOM.CampaignStatisticsQueryResponse>({}).on(
    getStatisticsItems.doneData,
    (_, newState) => newState
);

const campaignsEvents = {};
const campaignsEffects = { getItems, getItemById, getStatisticsItems };
const campaignsStores = { items, item, statisticsItems };

export { campaignsEffects, campaignsStores, campaignsEvents };
