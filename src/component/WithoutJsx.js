import React from 'react';
const WithoutJsx = () => {
    return (
        React.createElement(
            "div", 
            null, 
            React.createElement("h1", null, "hello from without JSX component"))
    )
}

export default WithoutJsx;