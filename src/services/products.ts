import axios from './axios';

export const getProductById = (data: WOM.GetRemoteProductRequest) =>
    axios<WOM.RemoteProductResponse>({
        url: '/product/remote/get',
        data
    });

export const getProducts = (data: WOM.QueryRemoteProductsRequest) =>
    axios<WOM.RemoteProductsResponse>({
        url: '/product/remote/query',
        data
    });

export const createProduct = (data: WOM.CreateRemoteProductRequest) =>
    axios<WOM.RemoteProductResponse>({
        url: '/product/remote/create',
        data
    });

export const updateProduct = (data: WOM.UpdateRemoteProductRequest) =>
    axios<WOM.RemoteProductResponse>({
        url: '/product/remote/update',
        data
    });

export const deleteProductById = (data: WOM.DeleteRemoteProductRequest) =>
    axios<WOM.MessageResponseBase>({
        url: '/product/remote/delete',
        data
    });
