import extendAxiosInstance from 'helpers/extendAxiosInstance';
import BaseAxiosInstance from 'libs/axiosInstances/BaseAxiosInstance';
import AuthService from 'modules/Auth/AuthService';
import { logoutAction } from 'modules/Auth/store/actions';


const AuthorizedAxiosInstance = extendAxiosInstance(BaseAxiosInstance, {});

// eslint-disable-next-line no-unused-vars
export const setUpAuthInterceptorsAction = () => (dispatch) => {
  AuthorizedAxiosInstance.interceptors.request.use(
    async (config) => {
      const headers = { ...config.headers };

      if (!headers.Authorization && AuthService.hasToken()) {
        headers.Authorization = AuthService.getToken();
      }

      if (!headers.Authorization) {
        delete headers.Authorization;
      }

      return ({
        ...config,
        headers,
      });
    },
    (error) => (
      Promise.reject(error)
    ),
  );

  AuthorizedAxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        dispatch(logoutAction());
      }

      throw error;
    },
  );
};

export default AuthorizedAxiosInstance;
