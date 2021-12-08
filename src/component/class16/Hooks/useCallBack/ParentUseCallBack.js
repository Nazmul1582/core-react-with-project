import React, { useState, useCallback } from 'react';
import Greet from './Greet';
import IncrementButton from './IncrementButton';
import ShowCount from './ShowCount';
function ParentUseCallBack(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1])

    const incrementCount2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2])

    return(
        <div>
            <Greet />
            <ShowCount count={count1}> Count1 </ShowCount> 
            <IncrementButton handler={incrementCount1}>Inc Count1</IncrementButton>
            <ShowCount count= {count2}> Count2 </ShowCount> 
            <IncrementButton handler={incrementCount2}>Inc Count2</IncrementButton>
        </div>
    )
}
export default ParentUseCallBack;