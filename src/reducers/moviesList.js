export default function moviesList(state = [], action) {
  return (action.type === 'STORE_MOVIES') ? action.movies : state;
}