import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './postTypes';
import axios from 'axios';

const fetchPostRequst = () => {
    return{
        type: FETCH_POST_REQUEST
    }
}

const fetchPostSuccess = (posts) => {
    return{
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
}

const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

export default function fetchPost() {
    return function (dispatch) {
        dispatch(fetchPostRequst());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res.data)
                dispatch(fetchPostSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchPostFailure(error))    
            })
    }
}
