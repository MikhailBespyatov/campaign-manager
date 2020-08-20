import axios from 'axios';
import config from 'constants/config';
import RequestError from 'errors/RequestError';

const BaseAxiosInstance = axios.create({
  baseURL: config.apiUrl,
});

BaseAxiosInstance.interceptors.response.use(
  ({ data }) => data,
  (error) => {
    throw new RequestError({
      ...error,
    });
  },
);

export default BaseAxiosInstance;
