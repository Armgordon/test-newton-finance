import React, { FC } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { IPhotoItem } from '../../types/main';
import ListInfo from '../ListInfo/ListInfo';

interface FavCardProps {
  favItem: IPhotoItem;
}

const FavCard: FC<FavCardProps> = ({ favItem }) => {
  const { id, download_url: dUrl, url, height, width, author } = favItem;
  return (
    <Card key={id} variant={'outlined'} style={{ width: '30%', minWidth: '150px' }}>
      <CardMedia component="img" height="140" image={dUrl} alt={`Image of "${author}" news`} />
      <CardContent>
        <ListInfo
          id={id}
          author={author}
          width={width}
          height={height}
          url={url}
          download_url={dUrl}
        />
      </CardContent>
    </Card>
  );
};

export default FavCard;
