import { MainText, SecondText, Span } from 'components/CarCard/CarCardStyled';
import { Modal } from 'components/Modal/Modal';
import {
  Condition,
  ConditionContainer,
  Link,
  MoreInfoWrapper,
} from './MoreInfoModalStyled';

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
      <MoreInfoWrapper>
        <img src={img} alt={description} />
        <MainText>
          {make} <Span>{model}</Span>, {year}
        </MainText>
        <SecondText className="second-text">
          {city} | {country} | Id: {id} | Year: {year} | Type: {type} | Fuel
          Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </SecondText>
        <p className="description-text">{description}</p>
        <p className="subtitle-text">Accessories and functionalities:</p>
        <SecondText>{accessories.join(' | ')}</SecondText>
        {rentalConditions.length && (
          <>
            <p className="subtitle-text">Rental Conditions: </p>
            <ConditionContainer>
              {rentalConditions.split('\n').map(condition => {
                if (condition.includes(':')) {
                  const [text, value] = condition.split(':');
                  return (
                    <Condition>
                      {text}: <Span>{value}</Span>
                    </Condition>
                  );
                }
                return <Condition>{condition}</Condition>;
              })}
              <Condition>
                Mileage: <Span>{mileage}</Span>
              </Condition>
              <Condition>
                Price: <Span>{rentalPrice}$</Span>
              </Condition>
            </ConditionContainer>
          </>
        )}
        <Link href="tel:+380730000000">Rental car</Link>
      </MoreInfoWrapper>
    </Modal>
  );
};
