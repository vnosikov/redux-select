import { combineReducers } from 'redux';

import { selects } from './selects.js';
import { color } from './color.js';


export default combineReducers({
  selects,
  color
});
