import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { baseURL } from 'constants/global';
import { campaignContentEvents } from 'stores/campaignContent';
import { userEvents, userStores } from 'stores/user';

const womAxiosInstance = axios.create();

womAxiosInstance.defaults.baseURL = baseURL;
womAxiosInstance.defaults.method = 'POST';
womAxiosInstance.interceptors.response.use(
    config => config.data,
    config => {
        const status = config.response.status;
        if (status === 403 || status === 401) {
            switch (window.location.pathname) {
                default:
                    campaignContentEvents.setIsFirstToTrue();
            }
            userEvents.logout();
        }

        Promise.reject(config.response.data);
    }
);

export default <T = void>(config: AxiosRequestConfig, withToken = true) => {
    const request: AxiosPromise<T> = womAxiosInstance({
        ...config,
        headers: withToken
            ? {
                  Authorization: `Bearer ${userStores.user.getState().token}`
              }
            : {}
    });

    return (request as any) as Promise<T>;
};
