import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './state/reducers/reducer';
import thunk from 'redux-thunk';

//Redux store for state handling, with only one reducer for simplicity
const store = createStore(
  reducer,
  composeWithDevTools(
  applyMiddleware(thunk, logger))
);

export default store;