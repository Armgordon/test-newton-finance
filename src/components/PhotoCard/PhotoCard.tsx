import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Checkbox, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IPhotoItem } from '../../types/main';
import { useAppStateSelector } from '../../store/selectors';
import { useMainActions } from '../../hooks/useMainActions';
import ListInfo from '../ListInfo/ListInfo';

interface PhotoCardProps {
  PhotoItem: IPhotoItem;
}

const PhotoCard: FC<PhotoCardProps> = ({ PhotoItem }) => {
  const { id, download_url: dUrl, url, height, width, author } = PhotoItem;
  const { favoriteList } = useAppStateSelector();
  const { addToFavorites, removeFromFavorites } = useMainActions();

  function checkInFavoriteHandler(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    checked ? addToFavorites(id) : removeFromFavorites(id);
  }

  return (
    <Card key={id} variant={'outlined'} style={{ maxWidth: '600px', width: '100%' }}>
      <CardMedia component="img" height="200px" image={dUrl} alt={`Image of "${author}" news`} />
      <CardContent>
        <Typography variant="body1" paragraph color="text.secondary" component={'div'}>
          <ListInfo
            id={id}
            author={author}
            width={width}
            height={height}
            url={url}
            download_url={dUrl}
          />
        </Typography>
        <Checkbox
          checked={favoriteList.includes(id)}
          onChange={checkInFavoriteHandler}
          inputProps={{ 'aria-label': '' }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
