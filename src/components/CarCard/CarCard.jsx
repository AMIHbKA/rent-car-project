import { api } from 'api/api';
import { MoreInfoModal } from 'components/MoreInfoModal/MoreInfoModal';
import React, { useState } from 'react';
import {
  Button,
  HeartIcon,
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
    favorite,
    functionalities,
  } = car;
  const [, city, country] = address.split(', ');
  const [functional] = functionalities;
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onShowModal = () => {
    setShowModal(state => !state);
  };

  const handleFavorite = async () => {
    await api.changeFavorite(id, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <Wrapper w="274px" relative>
      <Image src={img} alt={description} />
      <HeartIcon
        className={isFavorite && 'favorite'}
        onClick={handleFavorite}
      />
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
