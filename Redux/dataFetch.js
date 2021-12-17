const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

const fetchPostRequest = () => {
    return{
        type: FETCH_POST_REQUEST
    }
}

const fetchPostSuccess = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
}

const fetchPostFailure = (error) => {
    return{
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

const initialState = {
    isLoadding: false,
    post: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POST_REQUEST :
            return {
                isLoadding: true
            }
        case FETCH_POST_SUCCESS :
            return {
                isLoadding: false, 
                post : action.payload,
                error: ''
            }
        case FETCH_POST_FAILURE :
            return {
                isLoadding: false,
                post : [],
                error: action.error
            }
        default : return state
    }
}

const fetchPost = () => {
    return function(dispatch){
        dispatch(fetchPostRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const data = res.data.map(post => post.id)
            dispatch(fetchPostSuccess(data))
        })
        .catch(error => {dispatch(fetchPostFailure(error))});
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log('initial state', store.getState());
store.subscribe(() => console.log('update state', store.getState()))
store.dispatch(fetchPost())
