import React, { Component } from 'react';

class InputComp extends Component{
    constructor(){
        super();
        this.state = {

        }
        this.inpRef = React.createRef();
    }
    focusInput = () => {
        this.inpRef.current.focus();
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inpRef} />
            </div>
        )
    }
}
export default InputComp;