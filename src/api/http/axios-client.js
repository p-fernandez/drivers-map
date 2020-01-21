import axios from 'axios';

import {
  responseBuilderSuccess,
  responseBuilderError,
} from 'api/interfaces/adapters/api-response';

const baseURL = process.env.backend.baseURL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.response.use(
  responseBuilderSuccess,
  responseBuilderError
);

export default axiosInstance;
