import axios from './axios';

export const getCountries = (data: WOM.CountryResponse) =>
    axios<WOM.AdminAllCountriesResponse>({
        url: '/location/query-countries',
        data
    });
