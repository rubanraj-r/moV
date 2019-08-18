import { combineReducers } from 'redux';
import moviesList from './moviesList.js';
import genreList from './genreList.js';

export default combineReducers({
  movies: moviesList,
  genres: genreList
});