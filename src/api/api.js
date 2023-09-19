import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://649867909543ce0f49e200a9.mockapi.io/api/',
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.message);
  }
);

export const api = {
  instance,
};
