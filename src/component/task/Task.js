import React, {Component} from "react";
class Task extends Component{
    constructor(){
        super();
        this.state = {
            name: "Next Topper",
            isLoggedIn : true
        }
    }
    change = () => {
        this.setState( (prevState) => ({
            isLoggedIn : !prevState.isLoggedIn
        }))
    }
    render(){
        const {isLoggedIn, name} = this.state;
        return (
            <div>
                <h1>All information</h1>
                <h3>Name : { name} </h3>
                <button 
                onClick = {this.change}
                style = {{padding: "10px", borderRadius: "5px"}}>
                    {isLoggedIn ? "Logout" : "Login"} </button>
                {isLoggedIn ? <h1>Welcome {name}</h1> : 
                 <h1>You're not an authenticated user. Please login</h1>}
            </div>
        )        
    }
}
export default Task;