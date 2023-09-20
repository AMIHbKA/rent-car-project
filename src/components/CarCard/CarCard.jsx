import { MoreInfoModal } from 'components/MoreInfoModal/MoreInfoModal';
import React, { useState } from 'react';
import {
  Button,
  Image,
  MainText,
  SecondText,
  Span,
  Wrapper,
} from './CarCardStyled';

export const CarCard = ({ car }) => {
  const {
    img,
    description,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  } = car;
  const [, city, country] = address.split(', ');
  const [functional] = functionalities;
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(state => !state);
  };

  return (
    <Wrapper w="274px">
      <Image src={img} alt={description} />
      <Wrapper flex jc="space-between">
        <MainText>
          {make} <Span>{model}</Span>, {year}
        </MainText>
        <MainText>${rentalPrice}</MainText>
      </Wrapper>
      <SecondText>
        {city} | {country} | {rentalCompany} | {type} | {make} | {id} |{' '}
        {functional}
      </SecondText>
      {showModal && <MoreInfoModal onActive={onShowModal} data={car} />}
      <Button type="button" onClick={onShowModal}>
        Learn more
      </Button>
    </Wrapper>
  );
};
