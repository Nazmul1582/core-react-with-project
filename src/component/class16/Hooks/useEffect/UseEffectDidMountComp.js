import React, { useEffect, useState } from 'react';
import Coordinate from './Coordinate';
import DataFetch from './DataFetch';
function UseEffectDidMountComp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [show, setShow] = useState(true)

    // useEffect(()=> {
    //     console.log('from coumponent Did Mount');
    // })     // componentDidMount

    // useEffect(()=> {
    //     console.log('from coumponent Did Mount');
    // }, [count])     // conditionally update

    // useEffect(() => {
    //     console.log('from component Did Mount');
    // }, [] )      // componentDidUpdate off

    return(
        <div>
            <input type="text" value={name} 
                onChange={(e)=> setName(e.target.value)}
            />
            <h1>Hello - {count} </h1>
            <button onClick={()=> setCount(prevState => prevState+1)}>Count</button>
            <button onClick={()=> setShow(!show)}>Toggle</button>

            { show && <Coordinate />}
            <DataFetch />
        </div>
    )
}
export default UseEffectDidMountComp;