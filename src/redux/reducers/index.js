import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';
import genresReducer from './genresReducer';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  genres: genresReducer,
});
