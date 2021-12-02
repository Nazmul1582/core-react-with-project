import React, { useReducer } from 'react';
const initialState = {
    count1: 5
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment' :
            return {count1: state.count1 + action.value};
        case 'decrement' :
            return {count1: state.count1 - action.value};
        case 'reset' :
            return {count1: initialState.count1};
        default :
            return state
    }
}

function MultipleUseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return(
        <div>
            <h1>Count : {count.count1}</h1>
            <button onClick={()=> dispatch({type:'increment', value: 10})}>increment</button>
            <button onClick={()=> dispatch({type:'decrement', value: 1})}>decrement</button>
            <button onClick={()=> dispatch({type:'reset'})}>reset</button>

            
            <h1>Count 2 : {count2.count1}</h1>
            <button onClick={()=> dispatch2({type:'increment', value: 50})}>increment</button>
            <button onClick={()=> dispatch2({type:'decrement', value: 10})}>decrement</button>
            <button onClick={()=> dispatch2({type:'reset'})}>reset</button>
        </div>
    )
}

export default MultipleUseReducer;