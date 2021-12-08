import React from 'react';
function ShowCount({count, children}){
    console.log(children);
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default React.memo(ShowCount);