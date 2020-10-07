import adidasLogo from 'assets/img/adidas.svg';
import womLogo from 'assets/img/logo.svg';
import { blue, secondaryColor } from 'constants/styles';
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

export const themes: Dictionary<ThemeProps> = {
    default: defaultTheme,
    adidas: adidasTheme
};
