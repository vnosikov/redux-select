import React from 'react';

import CollapsiblePanel from './CollapsiblePanel';

export function PanelGroup({ panels }) {
  let panelsList = panels.map(panel => {
    return <CollapsiblePanel key={panel.id} id={panel.id} name={panel.name} />;
  });

  return (
    <div className="panel-group">
      {panelsList}
    </div>
  );
}
