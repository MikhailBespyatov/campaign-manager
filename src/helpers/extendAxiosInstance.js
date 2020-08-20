import axios from 'axios';

export default function extendAxiosInstance(baseInstance, newConfig) {
  const newInstance = axios.create({
    ...baseInstance.defaults,
    ...newConfig,
  });

  baseInstance.interceptors.request.handlers.forEach(
    (interceptor) => {
      newInstance.interceptors.request.use(...Object.values(interceptor));
    },
  );

  baseInstance.interceptors.response.handlers.forEach(
    (interceptor) => {
      newInstance.interceptors.response.use(...Object.values(interceptor));
    },
  );

  return newInstance;
}
