import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const middlewares = [ReduxThunk];
const createStoreWithMidddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMidddleware(rootReducer);