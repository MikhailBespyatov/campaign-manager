import womLogo from 'assets/img/logo.svg';
import adidasLogo from 'assets/organizations/logos/adidas_logo.svg';
import adidasLogoSecondary from 'assets/organizations/logos/adidas_logo_secondary.svg';
import esteeLauderLogo from 'assets/organizations/logos/estee_lauder_logo.svg';
import { backgroundColor, blue, secondaryColor, white } from 'constants/styles';
import { Dictionary } from 'types';

export interface ThemeProps {
    logo: string;
    secondaryLogo: string;
    primaryColor: string;
    background: string;
    primaryTextColor: string;
}

export const defaultTheme = {
    logo: womLogo,
    secondaryLogo: womLogo,
    primaryColor: blue,
    background: backgroundColor,
    primaryTextColor: white,
    organizationId: ''
};

export const companyNames = ['adidas', 'estee_lauder'];

export const companyNameUrls = companyNames.map(i => '/' + i);

export const adidasTheme = {
    logo: adidasLogo,
    secondaryLogo: adidasLogoSecondary,
    primaryColor: secondaryColor,
    background: backgroundColor,
    primaryTextColor: white
};

export const esteeLauderTheme = {
    logo: esteeLauderLogo,
    secondaryLogo: esteeLauderLogo,
    //primaryColor: esteeLauderColor,
    primaryTextColor: '#040a2b',
    primaryColor: '#fdefde',
    background: '#fdefde' //| #fdefde
};

export const themes: Dictionary<ThemeProps> = {
    default: defaultTheme,
    adidas: adidasTheme,
    estee_lauder: esteeLauderTheme
};
