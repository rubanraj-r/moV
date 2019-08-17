import ReactDOM from 'react-dom';
import routes from './route.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    routes()
  </Provider>,
  document.getElementById('app')
);
