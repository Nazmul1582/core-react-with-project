import React, { Component } from 'react';
class CountingComp extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    incrementHandler = (value) => {
        this.setState((prevState) => {
            return {
                count: prevState.count + value
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.render(this.state.count, this.incrementHandler)
                }
            </div>
        )
    }
}

export default CountingComp;