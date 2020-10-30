import { companyNames, defaultTheme, ThemeProps, themes } from 'constants/defaults';
import { themeStorageName } from 'constants/global';
import { createEvent, createStore } from 'effector';
import { API } from 'services';
import { organizationsStores } from 'stores/organizations';
import { getPublicTheme } from 'utils/usefulFunctions';

export interface GlobalPrefix {
    prefix?: string;
}

const setOrganizationIdForLogin = createEvent<string>();
const organizationIdForLogin = createStore('').on(setOrganizationIdForLogin, (_, newState) => newState);
organizationIdForLogin.watch(state => console.log(state));

const setTheme = createEvent<string>();
const theme = createStore<ThemeProps>(defaultTheme).on(setTheme, (_, themeName) =>
    companyNames.includes(themeName) ? themes[themeName] : themes['default']
);

// const injectPublicTheme = createEvent();
// const setPublicTheme = createEvent<string>();
// const publicTheme = createStore<ThemeProps>(defaultTheme)
//     .on(injectPublicTheme, () => themes[getPublicTheme()])
//     .on(setPublicTheme, (_, prefix) => themes[prefix]);
// publicTheme.watch(state => setOrganizationIdForLogin(state.organizationId));

// const setGlobalPrefixPublicUrl = createEvent<string>();
// const globalPrefixPublicUrl = createStore<string>('').on(setGlobalPrefixPublicUrl, (_, newState) => newState);

const injectGlobalPrefixPublic = createEvent();
const setGlobalPublicPrefix = createEvent<string>();
const globalPrefixPublic = createStore(getPublicTheme())
    .on(injectGlobalPrefixPublic, () => getPublicTheme())
    .on(setGlobalPublicPrefix, (_, newState) => newState);
globalPrefixPublic.watch(injectGlobalPrefixPublic, async state => {
    try {
        setTheme(state);
        const { organizationId } = await API.organizations.getIdentity({ organizationKey: state });
        organizationId && setOrganizationIdForLogin(organizationId);
    } catch {}
});
globalPrefixPublic.watch(setGlobalPublicPrefix, state => {
    setTheme(state);
    setOrganizationIdForLogin(organizationsStores.organizationId.getState());
});

const setGlobalPrefixUrl = createEvent<string>();
const globalPrefixUrl = createStore<string>('').on(setGlobalPrefixUrl, (_, newState) => newState);

const setGlobalPrefix = createEvent<string>();
const globalPrefix = createStore<GlobalPrefix>(
    JSON.parse(localStorage.getItem(themeStorageName) || '{}')
).on(setGlobalPrefix, (_, prefix) => ({ prefix }));
globalPrefix.watch(state => {
    setTheme(state?.prefix || '');
    setGlobalPrefixUrl(state?.prefix ? '/' + state.prefix : '');
});

const themeEvents = { setTheme, setGlobalPrefix, injectGlobalPrefixPublic, setGlobalPublicPrefix };
const themeEffects = {};
const themeStores = {
    theme,
    // publicTheme,
    globalPrefix,
    globalPrefixUrl,
    organizationIdForLogin,
    globalPrefixPublic
    // globalPrefixPublicUrl
};

export { themeEffects, themeStores, themeEvents };
