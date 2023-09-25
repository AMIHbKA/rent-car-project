import { CarCard } from 'components/CarCard/CarCard';
import { CardList } from './CarListStyled';

export const CarList = ({ data = [] }) => {
  return (
    <>
      <CardList>
        {data.map(car => {
          return (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          );
        })}
      </CardList>
    </>
  );
};
