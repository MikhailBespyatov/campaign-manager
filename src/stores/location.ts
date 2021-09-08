import { createEffect, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const getLocations = createEffect({
    handler: async () => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.location.getCountries({}).then(data => data);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const locations = createStore<WOM.AdminAllCountriesResponse>({}).on(getLocations.doneData, (_, newState) => newState);

const countriesStores = { locations };

const countriesEffects = { getLocations };

export { countriesStores, countriesEffects };
