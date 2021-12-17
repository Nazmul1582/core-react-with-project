const redux = require('redux');
const createStore = redux.createStore;

// action type 
const BUY_MOBILE = 'BUY_MOBILE';
const BUY_LAPTOP = 'BUY_LAPTOP';

// action creator
function buyMobile(){
    return {
        type: BUY_MOBILE,
        info: 'some data'
    }
}

function buyLaptop(){
    return {
        type: BUY_LAPTOP,
        info: 'some data'
    }
}

// reducer
// (previousState, action) => new State
const initialState = {
    totalMobile : 100,
    totalLaptop: 500
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_MOBILE :
            return {
                ...state, 
                totalMobile : state.totalMobile - 1
            }
        case BUY_LAPTOP :
            return {
                ...state, 
                totalLaptop : state.totalLaptop - 1
            }
        default : return state
    }
}

// store
// holds application's full state
// to get state's value, we use getState()
// to update, we use dispatch()
// subscribe(listener)


const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(()=> console.log('update state', store.getState()));
store.dispatch(buyMobile())
store.dispatch(buyMobile())
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
unsubscribe()
store.dispatch(buyMobile())
store.dispatch(buyLaptop())
console.log('final state', store.getState());