import React, { useState, useMemo } from 'react';
function MemoCounter(){
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const incrementHandler1 = () =>{
        setCount1(count1 + 1);
    }

    const calculateHandler = useMemo(() => {
        let i = 0;
        while(i<1000000000) i++;
        return count1 + 5
    }, [count1])

    const incrementHandler2 = () => {
        setCount2(count2 + 1);
    }

    return(
        <div>
            <h1>Count1 - {count1}</h1>
            <button onClick={incrementHandler1}>Count1</button>
            <h1>{calculateHandler}</h1>
            <h1>Count2 - {count2}</h1>
            <button onClick={incrementHandler2}> Count2 </button>
        </div>
    )
}
export default MemoCounter;