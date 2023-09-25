import { CarList } from 'components/CarList/CarList';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { useEffect, useState } from 'react';
import { api } from 'api/api';
import { LinkButton } from 'UI/baseStyle';

const ITEMS_PER_PAGE = 8;

export const Catalog = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (filteredData.length > 0) {
      setLastPage(true);
      return;
    }
  }, [filteredData]);

  useEffect(() => {
    const fetchData = async page => {
      try {
        const response = await api.instance.get(
          `?page=${page}&limit=${ITEMS_PER_PAGE}`
        );

        setCarList(state => [...state, ...response.data]);
        if (response.data.length < ITEMS_PER_PAGE) {
          setLastPage(true);
          return;
        }
        setLastPage(false);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    fetchData(page);
  }, [page]);

  return (
    <>
      <FilterForm setFilteredData={setFilteredData} isFilter={setIsFilterOn} />
      {!filteredData.length && isFilterOn ? (
        <div>No filter data</div>
      ) : (
        <CarList data={!filteredData.length ? carList : filteredData} />
      )}

      {!lastPage && (
        <LinkButton type="button" onClick={() => setPage(state => state + 1)}>
          Load More
        </LinkButton>
      )}
    </>
  );
};
