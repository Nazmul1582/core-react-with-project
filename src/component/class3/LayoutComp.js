import React from 'react';
const LayoutComp = (props) => {
    props.name = "Hello";
    return (
        <div style={{background:"lightgray"}}>
            <h1 style={{color:"White", fontSize: "45px",background: "Black"}}>
                Home    About   Blog    Page    Contact</h1>
                <h1> {props.name} </h1>
            {props.children}
            <h1 style={{color:"green", fontSize: "45px",background: "Black"}}>Footer    Footer      Footer      Footer      Footer</h1>
        </div>
    )
}

export default LayoutComp