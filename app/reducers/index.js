import { combineReducers } from 'redux';

import { selects } from './selects.js';


function color(state=null, action) {
  return state;
}

export default combineReducers({
  selects,
  color
});
