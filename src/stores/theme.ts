import { adidasTheme, defaultTheme, ThemeProps } from 'constants/defaults/themes';
import { adidasGlobalPrefix } from 'constants/routes';
import { createEvent, createStore } from 'effector';
import { getTheme } from 'utils/usefulFunctions';

const setTheme = createEvent();

const logoUrl = createStore<string>(defaultTheme.logo).on(setTheme, () =>
    getTheme() === adidasGlobalPrefix ? adidasTheme.logo : defaultTheme.logo
);
const theme = createStore<ThemeProps>(defaultTheme).on(setTheme, () =>
    getTheme() === adidasGlobalPrefix ? adidasTheme : defaultTheme
);

const themeEvents = { setTheme };
const themeEffects = {};
const themeStores = { theme, logoUrl };

export { themeEffects, themeStores, themeEvents };
