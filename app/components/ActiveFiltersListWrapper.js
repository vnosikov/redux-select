import { connect } from 'react-redux';

import {ActiveFiltersList} from './ActiveFiltersList';

const mapStateToProps = state => {
  const activeFilters = state.selects.reduce((acc, curSel) => {
    const selectedOptions = curSel.options.filter(opt => opt.selected).
      map(opt => ({
        selectId: curSel.id,
        optionId: opt.id,
        name: opt.name
      }));
    return acc.concat(selectedOptions);
  },[]);

  return {
    activeFilters
  };
};

export const ActiveFiltersListWrapper = connect(mapStateToProps, null)(ActiveFiltersList);
