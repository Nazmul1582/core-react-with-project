import React, { useEffect, useReducer} from 'react';
import axios from 'axios';

const initialState = {
    loading : true,
    data : {},
    error: ""
}
const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS' :
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case 'ERROR' :
            return {
                loading: false,
                data: {},
                error: action.payload
            };
        default :
            return state
    }
}
function DataFetchUsingReducer() {
    const [post, dispatch] = useReducer(reducer, initialState);
    const {loading, data, error} = post;
    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
        .then(res =>{
            dispatch({type:'SUCCESS', payload: res.data});
        })
        .catch(err => {
            dispatch({type:'ERROR', payload:err.message})
        })
    }, [])

    return(
        <div>
            {loading ? <h1>Loading .............. </h1> : 
             <h1>{data.title}</h1>}
            {!!error && <h1>{error}</h1>}
        </div>
    )
}

export default DataFetchUsingReducer;