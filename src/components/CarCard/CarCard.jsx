import React from 'react';
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
      <Button>Learn more</Button>
    </Wrapper>
  );
};
