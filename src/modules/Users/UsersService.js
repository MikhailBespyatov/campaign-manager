import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';

const urlPrefix = '';

const UsersService = {
  getUserById(userId) {
    return AuthorizedAxiosInstance.post(`${urlPrefix}/user/get`, { userId });
  },
};

export default UsersService;
