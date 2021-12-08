import React from 'react';
function IncrementButton ({handler, children}){
    console.log(children);
    return(
        <div>
            <button onClick={handler}>{children}</button>
        </div>
    )
}

export default React.memo(IncrementButton);