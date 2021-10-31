import React, {Component, Fragment} from 'react';
class FragmentComp extends Component{

    render(){
        return (
            <>
                <h1>Hello from Fragment Component</h1>
                {
                    new Array(5).fill('Next Topper').map( (ele, index) => (
                        <Fragment key = {index}>
                            <p>{index}</p>
                            <p>{ele}</p>
                        </Fragment>
                    ))
                }
            </>
        )
    }
}

export default FragmentComp;