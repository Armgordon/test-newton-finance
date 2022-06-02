import React, { FC } from 'react';
import { Pagination, Stack } from '@mui/material';
import { useAppStateSelector } from '../../store/selectors';
import { useMainActions } from '../../hooks/useMainActions';

const PageNav: FC = () => {
  const {
    photoCollection,
    paginator: { notesPerPage, currentPage },
  } = useAppStateSelector();
  const { setCurrentPageNumberAndPhotos } = useMainActions();
  const pageNumbers = Math.ceil(photoCollection.length / notesPerPage);

  function changePageHandler(event: React.ChangeEvent<unknown>, pageNumber: number) {
    const lastNoteIndex = pageNumber * notesPerPage;
    const firstNoteIndex = lastNoteIndex - notesPerPage;
    const currentPhotos = photoCollection.slice(firstNoteIndex, lastNoteIndex);
    setCurrentPageNumberAndPhotos(pageNumber, currentPhotos);
  }

  return (
    <Stack spacing={2}>
      <Pagination count={pageNumbers} page={currentPage} onChange={changePageHandler} />
    </Stack>
  );
};

export default PageNav;
