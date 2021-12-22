import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThunkMiddleware from 'redux-thunk';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, ThunkMiddleware))
    );
