export const storeGenres = genres => ({
  type: 'STORE_GENRES',
  genres
});

export const manageGenreList = (movies, genres) => {
  let genresInMovieList = [];
  movies.map(movie => genresInMovieList.push(movie.genre_ids));
  genresInMovieList = genresInMovieList.flat();
  genresInMovieList = genresInMovieList.filter((x,i) => genresInMovieList.indexOf(x) === i);
  let finalGenres = genres.genres && genres.genres.filter(x => genresInMovieList.includes(x.id));

  return {
    type: 'STORE_GENRES_IN_PAGE',
    genres: finalGenres
  }
}