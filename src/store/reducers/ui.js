import {
  CHANGE_THEME,
  SELECT_THUMBS_VIEW,
  SELECT_DETAIL_VIEW,
  FINISH_APP_LOADING
} from '../actions/types';

const initialState = {
  darkTheme: true,
  viewType: 'thumbs',
  loading: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    case SELECT_THUMBS_VIEW:
      return {
        ...state,
        viewType: 'thumbs'
      }
    case SELECT_DETAIL_VIEW:
      return {
        ...state,
        viewType: 'detail'
      }
    case FINISH_APP_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}