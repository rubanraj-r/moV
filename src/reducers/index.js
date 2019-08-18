import { combineReducers } from 'redux';
import moviesList from './moviesList.js';

export default combineReducers({
  movies: moviesList
});