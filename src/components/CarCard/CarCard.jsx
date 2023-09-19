import React from 'react';

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
    <>
      <img src={img} alt={description} />
      <p>
        {make} <span>{model}</span>, {year}
      </p>
      <p>{rentalPrice}</p>
      <p>
        {city} | {country} | {rentalCompany} | {type} | {make} | {id} |{' '}
        {functional}
      </p>
      <button>Learn more</button>
    </>
  );
};
