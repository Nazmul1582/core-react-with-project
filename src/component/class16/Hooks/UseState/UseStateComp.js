import React, { useState } from 'react';
function UseStateComp() {
    const [count, setCount] = useState(0);
    const [name,  setName] = useState('');
    const updateHandler = () => {
        setCount(5);
        setName('Next Topper');
    }
    return(
        <div>
            <h1>Count : {count} - Name : {name}</h1>
            <button onClick={updateHandler}>Update</button>
        </div>
    )
}

export default UseStateComp;


// import React, { useState } from 'react';
// function UseStateComp(){
//     const [count, setCount] = useState(1);
//     const [name, setName] = useState('')
//     const UpdateHandler = () => {
//         setCount(5)
//         setName('Next Topper')
//     }
//     return(
//         <div>
//             <h1>Count : {count} - Name : {name}</h1>
//             <button onClick={UpdateHandler}>Update</button>
//         </div>
//     )
// }
// export default UseStateComp;