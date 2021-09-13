import { createEffect, createEvent, createStore } from 'effector';
import ISO6391 from 'iso-639-1';
import { API } from 'services';
import { loadingEffects } from 'stores/loading';

interface LanguagesStoreTypes {
    code?: string;
    name?: string;
    nativeName?: string;
}

const addLanguage = createEvent<string>();
const removeLanguage = createEvent<string>();

const getLanguages = createEffect({
    handler: async () => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.languages.getLanguages({});

            const languages = ISO6391.getLanguages(data.languages);
            loadingEffects.updateInitialLoading();

            return languages || [];
        } catch {
            loadingEffects.updateInitialLoading();
            return [];
        }
    }
});

const languagesISO = createStore<LanguagesStoreTypes[]>([]).on(getLanguages.doneData, (_, newState) => newState);

const clientLanguages = createStore<string[]>([])
    .on(getLanguages.doneData, (_, data) => data.map(it => it.name))
    .on(addLanguage, (state, language) => [...state, language])
    .on(removeLanguage, (state, language) => state.filter(it => it !== language));

const languagesStores = { clientLanguages, languagesISO };

const languagesEffects = { getLanguages };

const languagesEvents = { removeLanguage, addLanguage };

export { languagesStores, languagesEffects, languagesEvents };
