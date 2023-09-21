import axios from 'axios';
import { roundToNearestTen } from 'utilities/roundToNearestTen';

const instance = axios.create({
  baseURL: 'https://649867909543ce0f49e200a9.mockapi.io/api/cars',
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.message);
  }
);

const getPrice = async () => {
  const min = await instance.get(
    '?orderby=rentalPrice&order=asc&limit=1&page=1'
  );
  const max = await instance.get(
    '?orderby=rentalPrice&order=desc&limit=1&page=1'
  );
  const minPrice = roundToNearestTen(min.data[0].rentalPrice);
  const maxPrice = roundToNearestTen(max.data[0].rentalPrice);
  return { minPrice, maxPrice };
};

const getAllCars = async () => {
  const response = await instance.get();
  return response.data;
};

const changeFavorite = async (id, value) => {
  const response = await instance.put(`/${id}`, { favorite: value });
  return response.data;
};

export const api = {
  instance,
  getPrice,
  getAllCars,
  changeFavorite,
};
