import { defaultTheme, ThemeProps, themes } from 'constants/defaults';
import { createEvent, createStore } from 'effector';

// const logoUrl = createStore<string>(defaultTheme.logo).on(setTheme, () =>
//     getTheme() === adidasGlobalPrefix ? adidasTheme.logo : defaultTheme.logo
// );
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

const themeEvents = { setTheme, setGlobalPrefix };
const themeEffects = {};
const themeStores = { theme, globalPrefix, globalPrefixUrl };

export { themeEffects, themeStores, themeEvents };
