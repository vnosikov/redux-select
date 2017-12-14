import { ActionType } from '../actions/index';

const colorsList = ['orange', 'yellow', 'green', 'blue', 'silver'];

export function color(state=null, action) {
  switch(action.type) {
    case ActionType.CHANGE_COLOR:
      const oldInd = colorsList.indexOf(state);
      const newInd = (oldInd === (colorsList.length - 1)) ? 0 : (oldInd + 1);
      return colorsList[newInd];
  }
  return state;
}
