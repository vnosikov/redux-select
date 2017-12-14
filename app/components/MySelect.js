import React from 'react';


export function MySelect({selectId, options, onOptionClick, onInputChange}) {
  const optionsList = options.map(opt => {
    return <Option key={opt.id} id={opt.id} isSelected={opt.selected} optionName={opt.name}
      onOptionClick={onOptionClick}/>
  });
  return (
    <div className="panel-body">
      <input type="text" onChange={(e) => onInputChange(e.target.value)} />
      <div className="my-select-options-list list-group">
        {optionsList}
      </div>
    </div>
  );
}

function Option({id, isSelected, optionName, onOptionClick}) {
  const className = isSelected ? 'list-group-item active' : 'list-group-item';
  return (
    <a href="#" className={className} onClick = {() => onOptionClick(id)}>
      {optionName}
    </a>
  );
}
