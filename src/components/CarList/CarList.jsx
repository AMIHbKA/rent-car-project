import { api } from 'api/api';
import { CarCard } from 'components/CarCard/CarCard';
import React, { useEffect, useState } from 'react';
import { CardList } from './CarListStyled';

const ITEMS_PER_PAGE = 8;

export const CarList = () => {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [carList, setCarList] = useState([]);

  console.log(isLoading);

  useEffect(() => {
    const fetchData = async page => {
      try {
        setIsLoading(true);
        const response = await api.instance.get(
          `?page=${page}&limit=${ITEMS_PER_PAGE}`
        );

        setCarList(state => [...state, ...response.data]);
        if (response.data.length < ITEMS_PER_PAGE) {
          setLastPage(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(page);
  }, [page]);

  return (
    <>
      <CardList>
        {carList.map(car => {
          return (
            <li>
              <CarCard key={car.id} car={car} />
            </li>
          );
        })}
      </CardList>
      {!lastPage && (
        <button type="button" onClick={() => setPage(state => state + 1)}>
          Next page
        </button>
      )}
    </>
  );
};
