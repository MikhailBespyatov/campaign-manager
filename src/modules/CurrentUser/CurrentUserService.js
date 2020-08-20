import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';
import userTransformer from 'modules/Users/userTransformer';

const urlPrefix = '';

const CurrentUserService = {
  getCurrentUser() {
    return AuthorizedAxiosInstance.post(`${urlPrefix}/user/get`, {})
      .then((user) => userTransformer(user));
  },
};

export default CurrentUserService;
