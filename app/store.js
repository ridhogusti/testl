import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import heroesReducer from './reducers/heroes';
import profileReducer from './reducers/profile';
import homeReducer from './reducers/home';

const reducer = combineReducers({
  heroesReducer,
  profileReducer,
  homeReducer,
}); 

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(reducer, middleware);

export default store;
