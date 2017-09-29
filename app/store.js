import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import heroesReducer from './reducers/heroes';

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(heroesReducer, middleware);

export default store;
