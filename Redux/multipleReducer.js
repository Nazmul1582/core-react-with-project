const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

const BUY_MOBILE = 'BUY_MOBILE';
const BUY_LAPTOP = 'BUY_LAPTOP';

const buyMobile = () => {
    return{
        type: BUY_MOBILE,
        info: 'some data'
    }
}

const buyLaptop = () => {
    return{
        type: BUY_LAPTOP,
        info: "some data"
    }
}

initialMobile = {
    totalMobile: 100
}

initialLaptop = {
    totalLaptop: 500
}

const mobileReducer = (state = initialMobile, action) => {
    switch(action.type){
        case BUY_MOBILE :
            return {
                ...state, totalMobile: state.totalMobile - 1
            }
        default : return state
    }
}

const laptopReducer = (state= initialLaptop, action) => {
    switch(action.type){
        case BUY_LAPTOP :
            return {
                ...state, totalLaptop: state.totalLaptop - 1
            }
        default : return state
    }
}

const rootReducer = combineReducers({
    mobile: mobileReducer,
    laptop: laptopReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('initial state', store.getState());
// const unsubscribe = store.subscribe(() => console.log('update state', store.getState()));
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
// unsubscribe();
store.dispatch(buyMobile());
store.dispatch(buyLaptop());
console.log('Final Mobile', store.getState().mobile);
console.log('Final Laptop', store.getState().laptop);