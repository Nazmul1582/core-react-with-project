import React, {useState} from 'react';
function useCounter(initialValue, value=1){
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(prevState => prevState + value)
    }
    
    const decrement = () => {
        setCount(prevState => prevState - value)
    }
    
    const reset = () => {
        setCount(0)
    }
    
    return [count, increment, decrement, reset];
}
export default useCounter;