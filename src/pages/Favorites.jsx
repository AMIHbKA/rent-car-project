import { api } from 'api/api';
import { CarList } from 'components/CarList/CarList';
import React, { useEffect, useState } from 'react';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const response = await api.getFavorites();
      setFavorites(response);
    };
    getFavorites();
  }, []);

  return (
    <>
      {favorites.length === 0 ? (
        <p>Favorite cars have yet to be chosen</p>
      ) : (
        <CarList data={favorites} />
      )}
    </>
  );
};
