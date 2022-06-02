import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

interface IObjectKeys {
  [key: string]: string | number;
}
interface ListInfoProps extends IObjectKeys {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ListInfo: FC<ListInfoProps> = (props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {Object.keys(props).map((key, index) => {
        return (
          <React.Fragment key={'' + props.id + index}>
            <ListItem style={{ paddingBottom: '0' }}>
              <ListItemText primary={props[key]} secondary={key} />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default ListInfo;
