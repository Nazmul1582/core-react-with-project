import React, { Component } from 'react';
import InputComp from './InputComp';

class RefsComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : ""
        }
        this.compRefs = React.createRef();
    }

    clickHandler = () => {
        this.compRefs.current.focusInput()
    }

    render(){
        return(
            <div>
                <InputComp ref={this.compRefs} />
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
export default RefsComp;