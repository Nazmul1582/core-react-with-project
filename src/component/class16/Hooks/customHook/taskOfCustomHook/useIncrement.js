import { useState } from 'react';

function useIncrement(initialValue, number){
    const [value, setValue] = useState(initialValue, number);
    const bind = {
        onClick : () => setValue(prevState => prevState + number)
    }

    return [ value, bind]
}
export default useIncrement;