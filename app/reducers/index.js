import { combineReducers } from 'redux';

function selects(state=null, action) {
  return state;
}

function color(state=null, action) {
  return state;
}

export default combineReducers({
  selects,
  color
});
