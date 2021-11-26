import React, { useState } from 'react';
function UseStateWithPrevStateComp() {
    const [count, setCount] = useState(0);
    // const incrementFiveHandler = () => {
    //     // for(let i=0; i<10; i++){
    //     //     setCount(count + 1)
    //     // }
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    // }
    const incrementTenHandler = () => {
        for(let i = 0; i<10; i++){
            setCount(prevState => prevState+1);
        }
    }
    return (
        <div>
            <h1>Clicked {count} Times</h1>
            <button onClick={()=> setCount(count + 1)}>increment</button>
            <button onClick={()=> setCount(count - 1)}>decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            {/* <button onClick={incrementFiveHandler}>incrementFive</button> */}
            <button onClick={incrementTenHandler}>increment 10 times</button>
        </div>
    )
}
export default UseStateWithPrevStateComp