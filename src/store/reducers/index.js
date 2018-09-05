import { combineReducers } from 'redux';

import UIReducer from './ui';
import storageReducer from './storage';
import filesReducer from './files';

export default combineReducers({
  UI: UIReducer,
  storage: storageReducer,
  files: filesReducer
});