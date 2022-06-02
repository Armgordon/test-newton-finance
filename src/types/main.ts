export interface IPhotoItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type PhotoCollection = IPhotoItem[];

export interface IAppState {
  photoCollection: PhotoCollection;
  favoriteList: string[];
  currentPhotos: PhotoCollection;
  paginator: {
    notesPerPage: number;
    currentPage: number;
  };
  loading: boolean;
  error: string | null;
}

export enum AppActionTypes {
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
  FETCH_PHOTOS_START = 'FETCH_PHOTOS_START',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  SET_CURRENT_PAGE_PHOTOS = 'SET_CURRENT_PAGE_PHOTOS',
  SET_CURRENT_PAGE_NUMBER = 'SET_CURRENT_PAGE_NUMBER',
}

interface IFetchPhotosStart {
  type: AppActionTypes.FETCH_PHOTOS_START;
}

interface IFetchPhotosSuccess {
  type: AppActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: PhotoCollection;
}

interface IFetchNewsError {
  type: AppActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

interface IAddToFavorites {
  type: AppActionTypes.ADD_TO_FAVORITES;
  payload: string;
}

interface IRemoveFromFavorites {
  type: AppActionTypes.REMOVE_FROM_FAVORITES;
  payload: string;
}

interface ISetCurrentPageNumber {
  type: AppActionTypes.SET_CURRENT_PAGE_NUMBER;
  payload: number;
}

interface ISetCurrentPagePhotos {
  type: AppActionTypes.SET_CURRENT_PAGE_PHOTOS;
  payload: PhotoCollection;
}

export type AppActions =
  | IFetchPhotosStart
  | IFetchPhotosSuccess
  | IFetchNewsError
  | IAddToFavorites
  | IRemoveFromFavorites
  | ISetCurrentPageNumber
  | ISetCurrentPagePhotos;
