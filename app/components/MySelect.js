import React from 'react';


export function MySelect({selectId, options, onOptionClick, onInputChange}) {
  const optionsList = options.map(opt => {
    return <Option key={opt.id} id={opt.id} isSelected={opt.selected} optionName={opt.name}
      onOptionClick={onOptionClick}/>
  });
  return (
    <div className="panel-body">
      <input type="text" onChange={(e) => onInputChange(e.target.value)} />
      <div className="my-select-options-list">
        {optionsList}
      </div>
    </div>
  );
}

function Option({id, isSelected, optionName, onOptionClick}) {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" onChange={() => onOptionClick(id)} checked={isSelected}>
        </input>
        {optionName}
      </label>
    </div>
  );
}
