export const storeMovies = movies => ({
  type: 'STORE_MOVIES',
  movies
});

export const filterMovies = filteredMovies => ({
  type: 'FILTER_MOVIES',
  filteredMovies
});