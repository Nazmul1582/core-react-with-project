import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./postTypes";


const initialState = {
    loading: true,
    posts: [],
    error: ''
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_POST_REQUEST : 
            return {
                loading: true
            }
        case FETCH_POST_SUCCESS :
            return {
                loading: false,
                posts : action.payload,
                error: ''
            }
        case FETCH_POST_FAILURE : 
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default : return state
    }
}