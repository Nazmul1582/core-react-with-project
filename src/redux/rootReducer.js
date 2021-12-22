import { combineReducers } from 'redux';
import laptopReducer from './laptop/laptopReducer';
import mobileReducer from './mobile/mobileReducer';
import postReducer from './post/postReducer';

const rootReducer = combineReducers({
    laptop: laptopReducer,
    mobile: mobileReducer,
    post: postReducer
})

export default rootReducer;