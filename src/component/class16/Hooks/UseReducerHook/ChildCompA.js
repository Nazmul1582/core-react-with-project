import React, { useContext } from 'react';
import { CountContext } from './ParentUseReducerWithUseContext';
function ChildCompA (){
    const {count, dispatch} = useContext(CountContext)
    return (
        <div>
            <h3>Chlid Comp A</h3>
            <h1>Value - {count.count1}</h1>
            <button onClick={()=> dispatch({type:'increment', value:10})}>decrement</button>
            <button onClick={()=> dispatch({type:'decrement', value:5})}>increment</button>
        </div>
    )
}

export default ChildCompA;