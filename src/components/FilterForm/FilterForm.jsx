import { DropList } from 'components/DropList/DropList';
import { useEffect, useState } from 'react';
import { getPriceDropList } from 'utilities/getPriceDropList';
import data from '../../data/makes.json';

export const FilterForm = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPriceDropList();
        setPriceData(data);
      } catch (error) {
        console.error('Ошибка при получении данных о ценах:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <form>
      <label>
        Car brand
        <DropList data={data} placeholder="Enter the text" />
      </label>

      <label>
        Price/ 1 hour
        <DropList data={priceData} placeholder="To $" />
      </label>

      <label>
        Car mileage / km
        <input placeholder="From" />
        <input placeholder="To" />
      </label>
    </form>
  );
};
