import { combineReducers } from 'redux';
import laptopReducer from './laptop/laptopReducer';
import mobileReducer from './mobile/mobileReducer';

const rootReducer = combineReducers({
    laptop: laptopReducer,
    mobile: mobileReducer
})

export default rootReducer;