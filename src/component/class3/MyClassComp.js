import React from 'react';

class MyClassComp extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Hello",
            age: 2
        }
        // this.nameChangeHandler = this.nameChangeHandler.bind(this)
    }
    nameChangeHandler = (name) => {
        this.setState({
            name: "Nazmul Hasan",
            age: 23
        })
    }
    render(){
        // this.state.name = "Next Topper"
        const {name, age} = this.state;
        const {name:Name, age: Age} = this.props;
        return (
            <div>
                <h1>All information</h1>
                <h3>Name : {Name ? Name: name} </h3>
                <h3>Age : {Age ? Age : age} </h3>
                <button 
                // onClick = {this.nameChangeHandler.bind(this)}
                // onClick = {() => this.nameChangeHandler()}
                onClick = {this.nameChangeHandler}
                style = {{padding: "10px", borderRadius: "5px"}}>
                    ChangeName</button>
            </div>
        )
    }
}

export default MyClassComp;


