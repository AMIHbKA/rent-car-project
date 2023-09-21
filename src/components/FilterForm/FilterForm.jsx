import { api } from 'api/api';
import { DropList } from 'components/DropList/DropList';
import { useEffect, useState } from 'react';
import { getPriceDropList } from 'utilities/getPriceDropList';
import data from '../../data/makes.json';
import { Button, Form, FormField, Input, Label } from './FilterFormStyled';

export const FilterForm = ({ setFilteredData }) => {
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
      setFilteredData(filteredData);
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
    <Form>
      <FormField>
        <Label>Car brand</Label>
        <DropList
          className="brand"
          data={data}
          placeholder="Enter the text"
          onChange={onChangeBrand}
        />
      </FormField>
      <FormField>
        <Label>Price/ 1 hour</Label>
        <DropList
          className="price"
          data={priceData}
          placeholder="To $"
          onChange={onChangePrice}
        />
      </FormField>
      <FormField>
        <Label htmlFor="Miles">Car mileage / km</Label>
        <div>
          <Input
            className="right"
            type="text"
            placeholder="From"
            value={milesFrom}
            onChange={onChangeMilesFrom}
          />
          <Input
            className="left"
            type="text"
            placeholder="To"
            value={milesTo}
            onChange={onChangeMilesTo}
          />
        </div>
      </FormField>

      <Button type="submit" onClick={OnButtonClick}>
        Search
      </Button>
    </Form>
  );
};
