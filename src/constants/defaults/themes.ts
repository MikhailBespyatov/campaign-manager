import adidasLogo from 'assets/img/adidas.svg';
import esteeLauderLogo from 'assets/img/estee_lauder_logo.svg';
import womLogo from 'assets/img/logo.svg';
import { blue, esteeLauderColor, secondaryColor } from 'constants/styles';
import { Dictionary } from 'types';

export interface ThemeProps {
    logo: string;
    primaryColor: string;
    organizationId: string;
}

export const defaultTheme = {
    logo: womLogo,
    primaryColor: blue,
    organizationId: ''
};

export const companyNames = ['adidas', 'estee_lauder'];

export const companyNameUrls = companyNames.map(i => '/' + i);

export const adidasTheme = {
    logo: adidasLogo,
    primaryColor: secondaryColor,
    organizationId: '5ddbdd2efd92595cf6d94dc1'
};

export const esteeLauderTheme = {
    logo: esteeLauderLogo,
    primaryColor: esteeLauderColor,
    organizationId: '5f8d93a65403c1f8e939ec70'
};

export const themes: Dictionary<ThemeProps> = {
    default: defaultTheme,
    adidas: adidasTheme,
    estee_lauder: esteeLauderTheme
};
