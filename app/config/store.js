import { createStore } from 'redux';
import reducers from '../reducers/index';
import { buildInitialState } from './initial-state';

export default createStore(reducers, buildInitialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
