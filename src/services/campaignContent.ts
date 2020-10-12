import axios from './axios';

export const getItemById = (data: WOM.ContentGetRequest) =>
    axios<WOM.ContentItemResponse>({
        url: '/catalogue/get',
        data
    });

export const getItems = (data: WOM.ContentQueryRequest) =>
    axios<WOM.ContentQueryResponse>({
        url: '/catalogue/query',
        data
    });
