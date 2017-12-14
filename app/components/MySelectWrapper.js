import { connect } from 'react-redux';

import {toggleOption, setOptionPattern} from '../actions/index';

import {MySelect} from './MySelect';

const mapStateToProps = (state, ownProps) => {
  const targetSelect = state.selects.find(s => s.id === ownProps.selectId);
  const textPattern = targetSelect.textPattern.toLowerCase();
  return {
    options: targetSelect.options.filter(opt => {
      return (opt.name.toLowerCase().indexOf(textPattern) >= 0);
    })
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onOptionClick: (optionId) => {
    dispatch(toggleOption(ownProps.selectId, optionId));
  },
  onInputChange: (str) => {
    dispatch(setOptionPattern(ownProps.selectId, str));
  }
});
export const MySelectWrapper = connect(mapStateToProps, mapDispatchToProps)(
  MySelect
);
