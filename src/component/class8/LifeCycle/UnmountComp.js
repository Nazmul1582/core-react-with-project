import React, {Component} from 'react';
import UnmountChild from './UnmountChild';
class UnmountComp extends Component{
    constructor(){
        super();
        this.state = ({
            show: true
        })
    }
    showHideHandler = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.show ? <UnmountChild /> :
                    <h1>Parent Unmount</h1>
                }
                <button onClick = {this.showHideHandler}>Click Me</button>
            </div>
        )
    }
}
export default UnmountComp;