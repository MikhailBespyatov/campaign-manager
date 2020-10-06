import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.organizations.getItemById({ organizationId: id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const item = createStore<WOM.OrganizationResponse>({}).on(getItemById.doneData, (_, newState) => newState);

const getStatisticsById = createEffect({
    handler: async (id: string) => {
        try {
            updateLoading();
            const data = await API.organizations.getStatisticsById({ organizationId: id });
            updateLoading();

            return data;
        } catch {
            updateLoading();
            return {};
        }
    }
});

const statistics = createStore<WOM.OrganizationStatisticsResponse>({}).on(
    getStatisticsById.doneData,
    (_, newState) => newState
);

const organizationsEvents = {};
const organizationsEffects = { getStatisticsById, getItemById };
const organizationsStores = { statistics, loading, item };

export { organizationsEffects, organizationsStores, organizationsEvents };
