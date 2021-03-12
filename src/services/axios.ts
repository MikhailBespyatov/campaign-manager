import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { baseURL } from 'constants/global';
import { campaignContentEvents } from 'stores/campaignContent';
import { userEvents, userStores } from 'stores/user';
import { isSignInPage, isUnknownOrganization } from 'utils/usefulFunctions';
import history from 'BrowserHistory';
import { routes } from 'constants/routes';

const womAxiosInstance = axios.create();

womAxiosInstance.defaults.baseURL = baseURL;
womAxiosInstance.defaults.method = 'POST';
womAxiosInstance.interceptors.response.use(
    config => config.data,
    config => {
        const { status, data } = config.response;

        if (status === 403 || status === 401) {
            switch (window.location.pathname) {
                default:
                    campaignContentEvents.setIsFirstToTrue();
            }
            userEvents.logout();
        }
        if (status === 404 && isSignInPage() && isUnknownOrganization(data)) history.push(routes.signUp.index);

        return Promise.reject(config.response);
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
