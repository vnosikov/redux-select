
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
  };
}

export function toggleCollapse(selectId) {
  return {
    type: ActionType.TOGGLE_COLLAPSE,
    selectId
  };
}

export function setOptionPattern(selectId, text) {
  return {
    type: ActionType.SET_OPTION_PATTERN,
    selectId,
    text
  };
}

/* changeBackground Declaration */
