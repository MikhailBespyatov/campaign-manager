import BaseAxiosInstance from 'libs/axiosInstances/BaseAxiosInstance';
import userTransformer from 'modules/Users/userTransformer';

const urlPrefix = '';
const tokenKey = 'authToken';

const AuthService = {

  login(values) {
    return BaseAxiosInstance.post(
      `${urlPrefix}/organization-user/authenticate`,
      values,
    ).then(({ token, user }) => ({
      token,
      user: userTransformer(user),
    }));
  },

  resetPassword(values) {
    return BaseAxiosInstance.post(
      `${urlPrefix}/organization-user/authenticate-token`,
      values,
    ).then(({ token, user }) => ({
      token,
      user: userTransformer(user),
    }));
  },

  sendSecurityCode(email) {
    return BaseAxiosInstance.post(
      `${urlPrefix}/organization-user/send-forgotten-password-email`,
      { email },
    );
  },

  logout() {
    localStorage.removeItem(tokenKey);
  },

  hasToken() {
    return !!localStorage.getItem(tokenKey);
  },

  getToken() {
    return localStorage.getItem(tokenKey);
  },

  setToken(token) {
    localStorage.setItem(tokenKey, `Bearer ${token}`);
  },
};

export default AuthService;
