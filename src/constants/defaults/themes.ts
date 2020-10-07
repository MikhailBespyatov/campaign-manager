import { blue, secondaryColor } from 'constants/styles';

export interface ThemeProps {
    logo: string;
    primaryColor: string;
}

export const defaultTheme = {
    logo: 'static/logo.svg',
    primaryColor: blue
};

export const adidasTheme = {
    logo: 'static/adidas.svg',
    primaryColor: secondaryColor
};
