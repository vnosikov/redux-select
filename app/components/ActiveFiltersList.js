import React from 'react';

import { ActiveFilterWrapper } from './ActiveFilterWrapper';

export function ActiveFiltersList({ activeFilters }) {
  let activeFiltersList = activeFilters.map((af, ind) => {
    return <ActiveFilterWrapper key={ind} selectId={af.selectId} optionId={af.optionId} name={af.name} />;
  });

  return (
    <div className="active-filters-list">
      {activeFiltersList}
    </div>
  );
}
