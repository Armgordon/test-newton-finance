import { IAppState, AppActions, AppActionTypes } from '../../types/main';

const initialState: IAppState = {
  photoCollection: [],
  favoriteList: [],
  currentPhotos: [],
  paginator: {
    notesPerPage: 4,
    currentPage: 1,
  },
  loading: false,
  error: null,
};

export default function mainReducer(state = initialState, action: AppActions): IAppState {
  switch (action.type) {
    case AppActionTypes.FETCH_PHOTOS_START:
      return {
        ...state,
        photoCollection: [],
        loading: true,
        error: null,
      };
    case AppActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photoCollection: action.payload,
        loading: false,
      };
    case AppActionTypes.FETCH_PHOTOS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AppActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case AppActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteList: state.favoriteList.filter((item) => item !== action.payload),
      };
    case AppActionTypes.SET_CURRENT_PAGE_NUMBER:
      return {
        ...state,
        paginator: {
          ...state.paginator,
          currentPage: action.payload,
        },
      };
    case AppActionTypes.SET_CURRENT_PAGE_PHOTOS:
      return {
        ...state,
        currentPhotos: action.payload,
      };
    default:
      return state;
  }
}
