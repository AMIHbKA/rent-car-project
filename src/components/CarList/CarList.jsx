import { CarCard } from 'components/CarCard/CarCard';
import { CardList } from './CarListStyled';

export const CarList = ({ data = [] }) => {
  return (
    <>
      <CardList>
        {data.map(car => {
          return (
            <li>
              <CarCard key={car.id} car={car} />
            </li>
          );
        })}
      </CardList>
    </>
  );
};
