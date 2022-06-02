import React, { FC } from 'react';
import { useAppStateSelector } from '../../store/selectors';
import { Stack, Typography } from '@mui/material';
import FavCard from '../../components/FavCard/FavCard';

const Favorites: FC = () => {
  const { favoriteList, photoCollection } = useAppStateSelector();
  return (
    <>
      <Typography variant="h2" component="div" align="center">
        Избранное
      </Typography>
      {favoriteList.length ? (
        <Stack gap={4} justifyContent="flex-start" p={5} direction={'row'} flexWrap={'wrap'}>
          {photoCollection
            .filter((photoItem) => {
              return favoriteList.includes(photoItem.id);
            })
            .map((favElement) => {
              return <FavCard key={favElement.id} favItem={favElement} />;
            })}
        </Stack>
      ) : (
        <Typography variant="h6" component="p" align="center">
          В вашем избранном нет фото. Пожалуйста отметьте их на главной и возвращайтесь.
        </Typography>
      )}
    </>
  );
};

export default Favorites;
