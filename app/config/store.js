import { createStore } from 'redux';
import reducers from '../reducers/index';
import { buildInitialState } from './initial-state';

console.log('store.js');
export default createStore(reducers, buildInitialState());
console.log('you all are gonna die here');
