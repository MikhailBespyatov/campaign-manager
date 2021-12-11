import { CancelToken } from 'axios';
import axios from './axios';

export const getItemById = (data: WOM.ContentGetRequest) =>
    axios<WOM.ContentItemResponse>({
        url: '/catalogue/get',
        data
    });

export const getItems = (data: WOM.ContentQueryRequest, cancelToken?: CancelToken) =>
    axios<WOM.QueryProductViewerContentResponse>({
        url: '/product/remote/query-content',
        cancelToken,
        data
    });
