import React, { useContext } from 'react';
import { CountContext } from './ParentUseReducerWithUseContext';
function ChildCompB (){
    const {count, dispatch} = useContext(CountContext)
    return (
        <div>
            <h3>Chlid Comp A</h3>
            <h1>Value - {count.count1}</h1>
            <button onClick={()=> dispatch({type:'increment', value: 10})}>increment</button>
            <button onClick={()=> dispatch({type:'decrement', value: 5})}>decrement</button>
        </div>
    )
}

export default ChildCompB;