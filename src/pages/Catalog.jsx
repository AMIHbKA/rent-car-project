import { CarList } from 'components/CarList/CarList';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { Container } from 'UI/Container';

export const Catalog = () => {
  return (
    <Container>
      <FilterForm />
      <CarList />
    </Container>
  );
};
