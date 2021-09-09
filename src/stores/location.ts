import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

const removeCountry = createEvent<string>();
const addCountry = createEvent<string>();

const getLocations = createEffect({
    handler: async () => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.location.getCountries({}).then(data => data);

            const sortedData = data.countries
                ?.map(it => it.countryName)
                .filter((item): item is string => typeof item === 'string') || [''];
            loadingEffects.updateInitialLoading();

            return sortedData || [''];
        } catch {
            loadingEffects.updateInitialLoading();

            return [''];
        }
    }
});

const locations = createStore<string[]>([])
    .on(getLocations.doneData, (_, newState) => newState)
    .on(addCountry, (state, country) => [...state, country])
    .on(removeCountry, (state, country) => state.filter(it => it !== country));

const countriesStores = { locations };
const countriesEvents = { addCountry, removeCountry };
const countriesEffects = { getLocations };

export { countriesStores, countriesEffects, countriesEvents };
