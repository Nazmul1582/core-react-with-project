import React, { useState } from 'react';
function UseSatteWithObjArrComp(){
    const [name, setName] = useState({firstName:'' , lastName: ''})
    // useState for array
    const [values, setValues] = useState([])
    const addValueHandler = () => {
        let number = Math.floor(Math.random() * 100) + 50;
        // values.push(number);
        // let a = [...values]
        // console.log(a);
        // setValues(a)
        setValues([...values, number])
    }
    console.log(values);
    return(
        <div>
            <label> firstName: </label>
            <input type="text" value={name.firstName} 
            onChange={e => setName({...name, firstName: e.target.value})} />
            <label> lastName: </label>
            <input type='text' value={name.lastName} 
            onChange={e => setName({...name, lastName: e.target.value})} />
            <h1>First Name : {name.firstName} - Last Name : {name.lastName} </h1>

            {/* useState for array */}
            <button onClick={addValueHandler}>Add Value</button>
            {values.map((ele, ind) => (
                <h1 key={ind}> {ele} </h1>
            ))}
        </div>
    )
}
export default UseSatteWithObjArrComp;