import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { userStores } from 'stores/user';
import { baseURL } from '../constants';

const yeayAxiosInstance = axios.create();

yeayAxiosInstance.defaults.baseURL = baseURL;
yeayAxiosInstance.defaults.method = 'POST';
yeayAxiosInstance.interceptors.response.use(
    config => config.data,
    config => Promise.reject(config.response.data)
);

export default <T = void>(config: AxiosRequestConfig, withToken = true) => {
    const request: AxiosPromise<T> = yeayAxiosInstance({
        ...config,
        headers: withToken
            ? {
                  Authorization: `Bearer ${userStores.user.getState().token}`
              }
            : {}
    });

    return (request as any) as Promise<T>;
};
