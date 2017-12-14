import React from 'react';

import { PanelGroupWrapper } from './PanelGroupWrapper';
import { ActiveFiltersListWrapper } from './ActiveFiltersListWrapper';
import ColoredRectangle from './ColoredRectangle';


export function App() {
  return (
    <div className="my-app">
      <h1>Hola, hola!</h1>
      <ActiveFiltersListWrapper />
      <PanelGroupWrapper />
      <ColoredRectangle />
    </div>
  );
}
