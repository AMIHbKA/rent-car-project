import { MainText, SecondText, Span } from 'components/CarCard/CarCardStyled';
import { Modal } from 'components/Modal/Modal';

export const MoreInfoModal = ({ onActive, data }) => {
  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    mileage,
    type,
    id,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
  } = data;
  const [, city, country] = address.split(', ');
  return (
    <Modal onActive={onActive}>
      <div>
        <img src={img} alt={description} />
        <MainText>
          {make} <Span>{model}</Span>, {year}
        </MainText>
        <SecondText>
          {city} | {country} | Id: {id} | Year: {year} | Type: {type} | Fuel
          Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </SecondText>
        <p>{description}</p>
        <p>Accessories and functionalities:</p>
        <p>{accessories.join(' | ')}</p>
        {rentalConditions.length && (
          <>
            <p>Rental Conditions: </p>
            {rentalConditions.split('\n').map(condition => (
              <p>{condition}</p>
            ))}
            <p>
              Mileage: <span>{mileage}</span>
            </p>
            <p>Price: {rentalPrice}$</p>
          </>
        )}
        <button type="tel">Rental car</button>
      </div>
    </Modal>
  );
};
