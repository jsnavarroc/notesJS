// Dependencies
import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
// Reducers
import reducers from '../reducers';
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const confMiddleware = applyMiddleware(promiseMiddleware);
export const store = createStore(reducers, initialState, composeEnhancers(confMiddleware));
