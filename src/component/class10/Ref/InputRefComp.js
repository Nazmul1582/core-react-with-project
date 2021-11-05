import React, { Component } from 'react';
    
class InputRefComp extends Component{
    constructor(){
        super();
        this.state = {
            name: ""
        };
        this.nameInput = React.createRef();
    }

    componentDidMount(){
        this.nameInput.current.focus();
    }

    showText = () => {
        alert(this.nameInput.current.value);
    }

    render(){
        return (
            <div>
                <input type = 'text' name = 'name' ref = {this.nameInput} />
                <button onClick={this.showText}>Show Text</button>
            </div>
        )
    }
}
export default InputRefComp;