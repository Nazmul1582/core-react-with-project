import React,{ useState } from 'react';
function useInput(initialValue, type){
    const [value, setValue] = useState(initialValue, type);
    const reset = () =>{
        setValue(initialValue);
    }
    const bind = {
        type,
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    }

    return [value, bind, reset];
}
export default useInput;