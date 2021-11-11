import React, { Component } from 'react';
import WithCounter from './WithCounter';
class OnClick extends Component{
    render(){
        const {name, count, handler, age} = this.props;
        return(
            <div>
                <h1>{name} - {count} - Age: {age} </h1>
                <button onClick={handler}>Clicked {count} times</button>
            </div>
        )
    }
}
export default WithCounter(OnClick, 1);