import { connect } from 'react-redux';

import { toggleOption } from '../actions/index';

import {ActiveFilter} from './ActiveFilter';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSpanClick: () => {
    dispatch(toggleOption(ownProps.selectId, ownProps.optionId));
  }
});

export const ActiveFilterWrapper = connect(null, mapDispatchToProps)(ActiveFilter);
