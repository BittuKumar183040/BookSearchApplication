import axios from 'axios';

const backendAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

const interceptor = (config) => {
  config.headers.user = 'guest';
  return config;
};

backendAPI.interceptors.request.use(interceptor);

export default backendAPI;
