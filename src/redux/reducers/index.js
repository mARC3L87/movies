import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});
