import { CancelToken } from 'axios';
import axios from './axios';

export const getItemById = (data: WOM.ContentGetRequest) =>
    axios<WOM.ContentItemResponse>({
        url: '/catalogue/get',
        data
    });

export const getItems = (data: WOM.ContentQueryRequest, cancelToken?: CancelToken) =>
    axios<WOM.ContentQueryResponse>({
        url: '/catalogue/query',
        cancelToken,
        data
    });
