import React, { Component } from 'react';
import WithCounter from './WithCounter';
class OnMouseOver extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incrementHandler = () => {
        this.setState((prevState) => {
            return{ count: prevState.count + 5 }
        })
    }
    render(){
        const { name, count, handler, color } = this.props;
        return(
            <div>
            <h1>{name} - {count} - Color: {color} </h1>
            <button onMouseOver={handler}>Hovered {count} times</button>
            </div>
        )
    }
}
export default WithCounter(OnMouseOver, 5);