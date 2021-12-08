import React from "react";
function Greet (){
    console.log('hello');
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default React.memo(Greet);