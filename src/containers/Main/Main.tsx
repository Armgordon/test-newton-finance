import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { useAppStateSelector } from '../../store/selectors';
import PageNav from '../../components/Navigation/PageNav/PageNav';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const Main: FC = () => {
  const { currentPhotos } = useAppStateSelector();
  return (
    <>
      <Typography variant="h2" component="div" align={'center'}>
        Главная
      </Typography>
      {currentPhotos ? (
        <Stack spacing={4} alignItems="center" p={5}>
          <PageNav />
          {currentPhotos.map((photoItem) => {
            return <PhotoCard key={photoItem.id} PhotoItem={photoItem} />;
          })}
        </Stack>
      ) : (
        <h2>Фотографии не загрузились. Пожалуйста попробуйте перезагрузить страницу.</h2>
      )}
    </>
  );
};

export default Main;
