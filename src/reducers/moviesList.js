export default function moviesList(state = [], action) {
  switch(action.type) {
    case 'STORE_MOVIES':
      return action.movies;
    case 'FILTER_MOVIES':
      return action.filteredMovies;
    default:
      return state;
  }
}