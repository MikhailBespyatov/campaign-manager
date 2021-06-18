// * react scripts
export const baseURL = process.env.REACT_APP_API_URL as string;
export const appVersion = process.env.REACT_APP_VERSION as string;
// *

// * vite
// export const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
// export const appVersion = import.meta.env.VITE_REACT_APP_VERSION;
// *

export const environment = baseURL === 'https://wom-dev.xc.io/' ? 'DEV' : 'PROD';

export const userStorageName = 'campaignManagerUser';
export const themeStorageName = 'campaignManagerTheme';

export const siteName = 'Campaign Manager';

export const defaultAlt = 'img';

export const passwordMinimum = 8;

export const womExchangeRate = 0.30715;

export const Noop = () => {};

export const numbersAfterComma = 1;

export const numbersAfterDotWom = 4;

export const nameProject = 'Campaign Manager';
