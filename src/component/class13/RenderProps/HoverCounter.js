import React, { Component } from 'react';
class HoverCounter extends Component{

    render() {
        return (
            <div>
                <h1>HoverCounter component</h1>
                <button onMouseEnter={() => this.props.handler(5)}>Count {this.props.count} time</button>
            </div>
        )
    }
}

export default HoverCounter;