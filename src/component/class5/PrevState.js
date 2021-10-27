import React, {Component} from "react";

class PrevState extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
            isLoggedIn : true
        }
    }
    incrementHandler = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        this.setState( (prevState) => ({
            count: prevState.count + 1 
        }))
    }

    toggleButton = () => {
        this.setState( (prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }) )
    }

    incrementFiveTimesHandler = () => {
        this.incrementHandler();
        this.incrementHandler();
        this.incrementHandler();
        this.incrementHandler();
        this.incrementHandler();
    }

    

    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.incrementFiveTimesHandler} >Increment</button>
                <button onClick = {this.toggleButton} >{this.state.isLoggedIn ? "logout" : "login"}</button>
            </div>
        )
    }
}
export default PrevState;