import React, { Component } from 'react';
class ClickCounter extends Component{

    render() {
        return (
            <div>
                <h1>Click Counter Component</h1>
                <button onClick={() => this.props.handler(10)}>Count {this.props.count} time</button>
            </div>
        )
    }
}

export default ClickCounter;