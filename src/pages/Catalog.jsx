import { CarList } from 'components/CarList/CarList';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { useEffect, useState } from 'react';
import { Container } from 'UI/Container';
import { api } from 'api/api';

const ITEMS_PER_PAGE = 8;

export const Catalog = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [carList, setCarList] = useState([]);

  console.log(isLoading);

  useEffect(() => {
    if (filteredData.length > 0) {
      setCarList(filteredData);
      setLastPage(true);
      setPage(1);
      return;
    }
  }, [filteredData]);

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
        setLastPage(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(page);
  }, [page]);

  console.log('carList', carList);
  return (
    <Container>
      <FilterForm setFilteredData={setFilteredData} />
      <CarList data={filteredData.length === 0 ? carList : filteredData} />
      {!lastPage && (
        <button type="button" onClick={() => setPage(state => state + 1)}>
          Next page
        </button>
      )}
    </Container>
  );
};
