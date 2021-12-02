// ================ useReducer with a primitive value ================

// import React, { useReducer } from 'react';

// let initialState = 0;
// const reducer = (state, action) => {
//     switch(action.type){
//         case 'increment' :
//             return state + action.value;
//         case 'decrement' : 
//             return state - action.value;
//         case 'reset' : 
//             return initialState;
//         default : 
//             return state
//     }
// }

// function UseReducerComp () {
//     const [count, dispatch] = useReducer(reducer, initialState);

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=> dispatch({type:'increment', value:5}) }>Increment</button>
//             <button onClick={()=> dispatch({type:'decrement', value:1}) }>Decrement</button>
//             <button onClick={()=> dispatch({type:'reset'}) }>Reset</button>
//         </div>
//     )
    
// }
// export default UseReducerComp;


// ============ complex data (object) =================

import React, { useReducer } from 'react';

const initialState = {
    count1: 5, 
    count2: 50
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, count1: state.count1 + action.value};
        case 'decrement' : 
            return {...state, count1: state.count1 - action.value};
        case 'reset' :
            return {...state, count1: initialState.count1};

            
        case 'increment2' : 
            return {...state, count2: state.count2 + action.value};
        case 'decrement2' :
            return {...state, count2: state.count2 - action.value};
        case 'reset2' :
            return {...state, count2: initialState.count2};
        default :
            return state;
    }
}
const UseReducerComp = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h1>Count 1 : {count.count1}</h1>
            <button onClick={()=> dispatch({type:'increment', value: 10})}>increment</button>
            <button onClick={()=> dispatch({type:'decrement', value: 1})}>decrement</button>
            <button onClick={()=> dispatch({type:'reset'})}>reset</button>

            <h1> Count2 : {count.count2} </h1>
            <button onClick={()=> dispatch({type:'increment2', value:50})}>increment</button>
            <button onClick={()=> dispatch({type:'decrement2', value:10})}>decrement</button>
            <button onClick={()=> dispatch({type:'reset2'})}>reset</button>
        </div>
    )
}
export default UseReducerComp;