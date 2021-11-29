import React, { useState,useEffect } from 'react';
function Coordinate() {
    const [x , setX] = useState(0);
    const[y , setY] = useState(0)

    const mousePosition = (event) => {
        console.log('hello');
        setX(event.clientX);
        setY(event.clientY);
    }
    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('mousemove', mousePosition)

        return () => {
            console.log('component will upmount');
            window.removeEventListener('mousemove', mousePosition)
        }
    }, [])
    return(
        <div>
            <h1> X : {x} - Y : {y} </h1>
        </div>

    )
}
export default Coordinate;