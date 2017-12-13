
export const ActionType = {
  TOGGLE_OPTION: 'TOGGLE_OPTION',
  TOGGLE_COLLAPSE: 'TOGGLE_COLLAPSE',
  SET_OPTION_PATTERN: 'SET_OPTION_PATTERN',
  CHANGE_BACKGROUND: 'CHANGE_BACKGROUND'
};

export function toggleOption(selectId, optionId) {
  return {
    type: ActionType.TOGGLE_OPTION,
    selectId,
    optionId
  }
};

/* toggleCollapse Declaration */

/* setOpttionPattern Declaration */

/* changeBackground Declaration */
