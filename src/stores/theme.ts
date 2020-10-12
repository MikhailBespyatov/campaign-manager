import { defaultTheme, ThemeProps, themes } from 'constants/defaults';
import { createEvent, createStore } from 'effector';
import { getTheme } from 'utils/usefulFunctions';

const setTheme = createEvent();

// const logoUrl = createStore<string>(defaultTheme.logo).on(setTheme, () =>
//     getTheme() === adidasGlobalPrefix ? adidasTheme.logo : defaultTheme.logo
// );
const theme = createStore<ThemeProps>(defaultTheme).on(setTheme, () => themes[getTheme()]);

const themeEvents = { setTheme };
const themeEffects = {};
const themeStores = { theme };

export { themeEffects, themeStores, themeEvents };
