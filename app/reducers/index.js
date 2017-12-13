import { combineReducers } from 'redux';

import { ActionType } from '../actions/index';

function selects(state=null, action) {
  switch(action.type) {
    case ActionType.TOGGLE_COLLAPSE:
      const newState = state.map(s => {
        if(s.id === action.selectId) {
          return Object.assign({}, s, {isOpen: !s.isOpen});
        } else {
          return s;
        }
      });

      return newState;
    default:
      return state;
  }
}

function color(state=null, action) {
  return state;
}

export default combineReducers({
  selects,
  color
});
