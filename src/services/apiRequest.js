import axios from 'axios';

const backendAPI = axios.create({
  baseURL: 'https://book-applicaton-backend-api.vercel.app',
});

const interceptor = (config) => {
  config.headers.user = 'guest';
  return config;
};

backendAPI.interceptors.request.use(interceptor);

export default backendAPI;
