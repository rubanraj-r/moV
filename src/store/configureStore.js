import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/index.js';
import ReduxThunk from 'redux-thunk';

const configureStore = () => {
	const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('./../reducers/index.js');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
