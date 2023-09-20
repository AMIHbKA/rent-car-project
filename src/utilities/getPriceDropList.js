import { api } from 'api/api';

export const getPriceDropList = async () => {
  const { minPrice, maxPrice } = await api.getPrice();
  let arr = [];
  for (let i = minPrice; i <= maxPrice; i += 10) {
    arr.push(i);
  }

  return arr;
};
