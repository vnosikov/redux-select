import { ActionType } from '../actions/index';

export function selects(state=null, action) {
  switch(action.type) {
    case ActionType.TOGGLE_COLLAPSE:
      return onToggleCollapse(state, action);
    case ActionType.TOGGLE_OPTION:
      return onToggleOption(state, action);
    case ActionType.SET_OPTION_PATTERN:
      return onSetOptionPattern(state, action);
    default:
      return state;
  }
}

function onToggleCollapse(state, action) {
  const newState = state.map(s => {
    if(s.id === action.selectId) {
      return Object.assign({}, s, {isOpen: !s.isOpen});
    } else {
      return s;
    }
  });

  return newState;
}

function onToggleOption(state, action) {
  const newState = state.map(s=> {
    if(s.id === action.selectId) {
      return Object.assign({}, s, {options: s.options.map(opt => {
        if(opt.id === action.optionId) {
          return Object.assign({}, opt, {selected: !opt.selected});
        } else {
          return opt;
        }
      })})
    }
    else return s;
  });

  return newState;
}

function onSetOptionPattern(state, action) {
  const newState = state.map(s => {
    if(s.id === action.selectId) {
      return Object.assign({}, s, {textPattern: action.text});
    } else {
      return s;
    }
  });

  return newState;
}
