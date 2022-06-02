import axios from 'axios';
import { Dispatch } from 'redux';

import { AppActions, AppActionTypes, PhotoCollection } from '../../types/main';
import { store } from '../index';

export function fetchPhotoCollection() {
  return async (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(<AppActions>fetchPhotosStart());
      const response = await axios.get('https://picsum.photos/v2/list');
      await dispatch(<AppActions>fetchPhotosSuccess(response.data));
      const mainStore = store.getState().main;
      dispatch(
        <AppActions>(
          setCurrentPagePhotos(mainStore.photoCollection.slice(0, mainStore.paginator.notesPerPage))
        )
      );
      dispatch(<AppActions>setCurrentPageNumber(1));
    } catch (e) {
      console.log('error ', e);
      dispatch(fetchPhotosError('Произошла ошибка при загрузке записей'));
    }
  };
}

export function fetchPhotosStart(): AppActions {
  return {
    type: AppActionTypes.FETCH_PHOTOS_START,
  };
}

export function fetchPhotosSuccess(photoCollection: PhotoCollection): AppActions {
  return {
    type: AppActionTypes.FETCH_PHOTOS_SUCCESS,
    payload: photoCollection,
  };
}

export function fetchPhotosError(text: string): AppActions {
  return {
    type: AppActionTypes.FETCH_PHOTOS_ERROR,
    payload: text,
  };
}
export function addToFavorites(id: string): AppActions {
  return {
    type: AppActionTypes.ADD_TO_FAVORITES,
    payload: id,
  };
}

export function removeFromFavorites(id: string): AppActions {
  return {
    type: AppActionTypes.REMOVE_FROM_FAVORITES,
    payload: id,
  };
}

export function setCurrentPageNumber(pageNumber: number): AppActions {
  return {
    type: AppActionTypes.SET_CURRENT_PAGE_NUMBER,
    payload: pageNumber,
  };
}
export function setCurrentPagePhotos(currentPhotos: PhotoCollection): AppActions {
  return {
    type: AppActionTypes.SET_CURRENT_PAGE_PHOTOS,
    payload: currentPhotos,
  };
}

export function setCurrentPageNumberAndPhotos(pageNumber: number, pagePhotos: PhotoCollection) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(<AppActions>setCurrentPagePhotos(pagePhotos));
    dispatch(<AppActions>setCurrentPageNumber(pageNumber));
  };
}
