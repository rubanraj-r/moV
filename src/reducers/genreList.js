export default function genreList(state = [], action) {
  switch(action.type) {
    case 'STORE_GENRES':
      return action.genres;
    case 'STORE_GENRES_IN_PAGE':
      return action.genres;
    default:
      return state;
  }
}