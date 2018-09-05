import {
  CHANGE_THEME,
  SELECT_DETAIL_VIEW,
  SELECT_THUMBS_VIEW,
  FINISH_APP_LOADING
} from './types';

export const changeTheme = () => ({
  type: CHANGE_THEME
});


export const selectDetailView = () => ({
  type: SELECT_DETAIL_VIEW
});

export const selectThumbsView = () => ({
  type: SELECT_THUMBS_VIEW
});

export const finishAppLoading = () => ({
  type: FINISH_APP_LOADING
});