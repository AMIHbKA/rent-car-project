import { api } from 'api/api';
import { DropList } from 'components/DropList/DropList';
import { useEffect, useState } from 'react';
import { getPriceDropList } from 'utilities/getPriceDropList';
import data from '../../data/makes.json';

export const FilterForm = () => {
  const [priceData, setPriceData] = useState([]);
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [milesFrom, setMilesFrom] = useState('');
  const [milesTo, setMilesTo] = useState('');
  const [allData, setAllData] = useState([]);

  const filterCars = car => {
    const isBrandMatch = !brand || car.make === brand;
    const isPriceMatch = !price || car.rentalPrice <= price;
    const isMilesFromMatch = !milesFrom || car.mileage >= milesFrom;
    const isMilesToMatch = !milesTo || car.mileage <= milesTo;
    return isBrandMatch && isPriceMatch && isMilesFromMatch && isMilesToMatch;
  };

  const OnButtonClick = async event => {
    event.preventDefault();

    const isFilterExists = brand || price || milesFrom || milesTo;

    if (!isFilterExists) {
      return;
    }
    try {
      if (!allData.length) {
        const data = await api.getAllCars();
        setAllData(data);
      }

      const filteredData = allData.filter(filterCars);
      console.log('Filtered Data:', filteredData);
      return filteredData;
    } catch (error) {
      console.error(error);
    }
  };

  const onChangePrice = value => {
    setPrice(value);
  };

  const onChangeBrand = value => {
    setBrand(value);
  };

  const onChangeMilesFrom = event => {
    setMilesFrom(event.currentTarget.value);
  };

  const onChangeMilesTo = event => {
    setMilesTo(event.currentTarget.value);
  };

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
        <DropList
          data={data}
          placeholder="Enter the text"
          onChange={onChangeBrand}
        />
      </label>

      <label>
        Price/ 1 hour
        <DropList
          data={priceData}
          placeholder="To $"
          onChange={onChangePrice}
        />
      </label>

      <label>
        Car mileage / km
        <input
          placeholder="From"
          value={milesFrom}
          onChange={onChangeMilesFrom}
        />
        <input placeholder="To" value={milesTo} onChange={onChangeMilesTo} />
      </label>
      <button type="submit" onClick={OnButtonClick}>
        Search
      </button>
    </form>
  );
};
