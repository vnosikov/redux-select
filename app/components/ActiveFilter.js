import React from 'react';

export function ActiveFilter({selectId, optionId, name, onSpanClick}) {
  return <span className="label label-primary active-filter" onClick={() => onSpanClick()}>
    {name}
  </span>
}
