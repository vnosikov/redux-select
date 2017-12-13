import store from '../config/store';
import React from 'react';

export function App() {
  return <h1>Hola, hola! {store.getState().color}</h1>;
}
