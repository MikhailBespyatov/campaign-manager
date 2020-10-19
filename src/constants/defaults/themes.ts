import adidasLogo from 'assets/img/adidas.svg';
import esteeLauderLogo from 'assets/img/estee_lauder_logo.svg';
import womLogo from 'assets/img/logo.svg';
import { blue, esteeLauderColor, secondaryColor } from 'constants/styles';
import { Dictionary } from 'types';

export interface ThemeProps {
    logo: string;
    primaryColor: string;
}

export const defaultTheme = {
    logo: womLogo,
    primaryColor: blue
};

export const adidasTheme = {
    logo: adidasLogo,
    primaryColor: secondaryColor
};

export const esteeLauderTheme = {
    logo: esteeLauderLogo,
    primaryColor: esteeLauderColor
};

export const themes: Dictionary<ThemeProps> = {
    default: defaultTheme,
    base: defaultTheme,
    adidas: adidasTheme,
    estee_lauder: esteeLauderTheme
};
