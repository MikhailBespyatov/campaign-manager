import womLogo from 'assets/img/logo.svg';
import adidasLogo from 'assets/organizations/logos/adidas_logo.svg';
import adidasLogoSecondary from 'assets/organizations/logos/adidas_logo_secondary.svg';
import esteeLauderLogo from 'assets/organizations/logos/estee_lauder_logo.svg';
import esteeLauderLogoSecondary from 'assets/organizations/logos/estee_lauder_logo_secondary.svg';
import { backgroundColor, blue, primaryColor, secondaryColor, white } from 'constants/styles';
import { Dictionary } from 'types';

export interface ThemeProps {
    logo: string;
    secondaryLogo: string;
    userTableLogo: string;
    primaryColor: string;
    background: string;
    buyWOMButtonBackgroundColor: string;
    buyWOMButtonTextColor: string;
    statisticActiveTextColor: string;
    statisticInactiveTextColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    footerTextColor: string;
}

export const defaultTheme = {
    logo: womLogo,
    secondaryLogo: womLogo,
    userTableLogo: womLogo,
    primaryColor: blue,
    background: backgroundColor,
    primaryTextColor: white,
    secondaryTextColor: white,
    buyWOMButtonBackgroundColor: secondaryColor,
    buyWOMButtonTextColor: white,
    statisticActiveTextColor: white,
    statisticInactiveTextColor: primaryColor,
    footerTextColor: white,
    organizationId: ''
};

export const companyNames = ['adidas', 'estee_lauder'];

export const companyNameUrls = companyNames.map(i => '/' + i);

export const adidasTheme = {
    logo: adidasLogoSecondary,
    secondaryLogo: adidasLogo,
    userTableLogo: adidasLogoSecondary,
    primaryColor: secondaryColor,
    background: '#ECEFF1',
    buyWOMButtonBackgroundColor: '#E4E4E4',
    buyWOMButtonTextColor: secondaryColor,
    statisticActiveTextColor: '#F7F8F3',
    statisticInactiveTextColor: '#002C3E',
    primaryTextColor: primaryColor,
    footerTextColor: secondaryColor,
    secondaryTextColor: white
};

export const esteeLauderTheme = {
    logo: esteeLauderLogoSecondary,
    secondaryLogo: esteeLauderLogo,
    userTableLogo: esteeLauderLogo,
    //primaryColor: esteeLauderColor,
    primaryTextColor: white,
    secondaryTextColor: white,
    primaryColor: '#E79B61',
    buyWOMButtonBackgroundColor: '#0C0D21',
    buyWOMButtonTextColor: white,
    statisticActiveTextColor: '#A34123',
    statisticInactiveTextColor: '#A34123',
    footerTextColor: secondaryColor,
    background: '#E79B61' //| #fdefde
};

export const themes: Dictionary<ThemeProps> = {
    default: defaultTheme,
    adidas: adidasTheme,
    estee_lauder: esteeLauderTheme
};
