import React from 'react'
const FunctionalComp = ({name, age}) => {
    console.log('Functional Component');
    return (
        <div>
            <h1>Functional Component - {name} - {age}</h1>
        </div>
    )
}

export default React.memo(FunctionalComp);