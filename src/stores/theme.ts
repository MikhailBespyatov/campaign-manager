import { defaultTheme, ThemeProps, themes } from 'constants/defaults';
import { createEvent, createStore } from 'effector';
import { getPublicTheme } from 'utils/usefulFunctions';

// const logoUrl = createStore<string>(defaultTheme.logo).on(setTheme, () =>
//     getTheme() === adidasGlobalPrefix ? adidasTheme.logo : defaultTheme.logo
// );

const injectPublicTheme = createEvent();

const publicTheme = createStore<ThemeProps>(defaultTheme).on(injectPublicTheme, () => themes[getPublicTheme()]);

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

const themeEvents = { setTheme, injectPublicTheme, setGlobalPrefix };
const themeEffects = {};
const themeStores = { theme, publicTheme, globalPrefix, globalPrefixUrl };

export { themeEffects, themeStores, themeEvents };
