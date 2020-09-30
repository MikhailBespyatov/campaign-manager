import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const getStatisticsById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.organizations.getStatisticsById({ organizationId: id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const statistics = createStore<WOM.OrganizationStatisticsResponse>({}).on(
    getStatisticsById.doneData,
    (_, newState) => newState
);

const organizationsEvents = {};
const organizationsEffects = { getStatisticsById };
const organizationsStores = { statistics, loading };

export { organizationsEffects, organizationsStores, organizationsEvents };
