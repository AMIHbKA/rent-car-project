import { CarList } from 'components/CarList/CarList';
import { FilterForm } from 'components/FilterForm/FilterForm';

export const Catalog = () => {
  return (
    <>
      <FilterForm />
      <CarList />
    </>
  );
};
