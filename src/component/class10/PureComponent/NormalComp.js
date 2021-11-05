import React, {Component} from 'react';

class NormalComp extends Component{
    render(){
        console.log('Normal Component');
        return (
            <div>
                <h1>Normal Component - {this.props.name} - {this.props.age} </h1>
            </div>
        )
    }
}
export default NormalComp;