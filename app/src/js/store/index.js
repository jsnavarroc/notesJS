// Dependencies
import { createStore, compose } from 'redux';
// Reducers
import reducers from '../reducers';
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, composeEnhancers());
