import { defaultTheme, ThemeProps, themes } from 'constants/defaults';
import { createEvent, createStore } from 'effector';
import { getPublicTheme } from 'utils/usefulFunctions';

// const logoUrl = createStore<string>(defaultTheme.logo).on(setTheme, () =>
//     getTheme() === adidasGlobalPrefix ? adidasTheme.logo : defaultTheme.logo
// );

const setOrganizationIdForLogin = createEvent<string>();
const organizationIdForLogin = createStore<string>('').on(setOrganizationIdForLogin, (_, newState) => newState);

const injectPublicTheme = createEvent();
const setPublicTheme = createEvent<string>();
const publicTheme = createStore<ThemeProps>(defaultTheme)
    .on(injectPublicTheme, () => themes[getPublicTheme()])
    .on(setPublicTheme, (_, prefix) => themes[prefix]);
publicTheme.watch(state => setOrganizationIdForLogin(state.organizationId));

const setGlobalPrefixPublicUrl = createEvent<string>();
const globalPrefixPublicUrl = createStore<string>('').on(setGlobalPrefixPublicUrl, (_, newState) => newState);

const injectGlobalPrefixPublic = createEvent();
const globalPrefixPublic = createStore<string>(getPublicTheme()).on(injectGlobalPrefixPublic, () => getPublicTheme());
globalPrefixPublic.watch(state => {
    setPublicTheme(state);
    setGlobalPrefixPublicUrl(state ? '/' + state : '');
});

const setTheme = createEvent<string>();
const theme = createStore<ThemeProps>(defaultTheme).on(setTheme, (_, themeName) =>
    themeName ? themes[themeName] : themes['default']
);

const setGlobalPrefixUrl = createEvent<string>();
const globalPrefixUrl = createStore<string>('').on(setGlobalPrefixUrl, (_, newState) => newState);

const setGlobalPrefix = createEvent<string>();
const globalPrefix = createStore<string>('').on(setGlobalPrefix, (_, newState) => newState);
globalPrefix.watch(setGlobalPrefix, state => {
    setTheme(state);
    setGlobalPrefixUrl(state ? '/' + state : '');
});

const themeEvents = { setTheme, injectPublicTheme, setGlobalPrefix, injectGlobalPrefixPublic };
const themeEffects = {};
const themeStores = {
    theme,
    publicTheme,
    globalPrefix,
    globalPrefixUrl,
    organizationIdForLogin,
    globalPrefixPublicUrl
};

export { themeEffects, themeStores, themeEvents };
