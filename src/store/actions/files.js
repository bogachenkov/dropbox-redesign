import {
  DELETE_FILE,
  SELECT_FILE,
  DELETE_SELECTED_FILES
} from './types';

export const deleteFile = filename => ({
  type: DELETE_FILE,
  filename
});

export const selectFile = filename => ({
  type: SELECT_FILE,
  filename
});

export const deleteSelectedFiles = () => ({
  type: DELETE_SELECTED_FILES
});