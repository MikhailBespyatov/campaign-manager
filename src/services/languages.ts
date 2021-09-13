import axios from 'services/axios';

export const getLanguages = (data: WOM.GetLanguagesRequest) =>
    axios<WOM.AllLanguagesResponse>({
        url: '/language/query',
        data
    });
