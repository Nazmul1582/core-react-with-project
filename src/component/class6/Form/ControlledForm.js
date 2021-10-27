import React, {Component} from 'react';

class ControlledForm extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
            age: null,
            programmingLanguage: "",
            password: "",
            libraries: []
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    checkboxChangeHandler = (event) => {
        if(event.target.checked){
            this.setState({
                libraries: [...this.state.libraries, event.target.value]
            })
        }else{
            console.log(event.target.checked)
        }
        // console.log(event.target.value, event.target.checked)
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        
        return (
            <form>
                <div>
                    <label> Name : </label>
                    <input 
                    type = "text" 
                    name = 'name' 
                    value = {this.state.name} 
                    onChange = {this.changeHandler} />
                </div>
                <div>
                    <label>Age : </label>
                    <input 
                    type = 'number'
                    name = 'age'
                    value = {this.state.age}
                    onChange = {this.changeHandler}
                     />
                </div>
                <div>
                    <label>Password : </label>
                    <input 
                    type = 'password'
                    name = 'password'
                    value = {this.state.password}
                    onChange = {this.changeHandler}
                     />
                </div>
                <div>
                    <label>Select a language </label>
                    <select 
                    name = 'programmingLanguage'
                    value = {this.state.programmingLanguage}
                    onChange = {this.changeHandler}>
                        <option value = "js">JavaScript</option>
                        <option value = "c#">C Sharp</option>
                        <option value = "phython">Phython</option>
                    </select>
                </div>
                <div>
                    <p>Select Your prefareble libraries</p>
                    <input type = 'checkbox' name ="React" value = "React" onChange = {this.checkboxChangeHandler} />
                    <label>React</label>
                    <input type = 'checkbox' name ="Express" value = "Express"  onChange = {this.checkboxChangeHandler} />
                    <label>Express</label>
                    <input type = 'checkbox' name ="Hapi" value = "Hapi"  onChange = {this.checkboxChangeHandler} />
                    <label>Hapi</label>
                    <input type = 'checkbox' name ="Next.js" value = "Next.js"  onChange = {this.checkboxChangeHandler} />
                    <label>Next.js</label>
                </div>
                <br />
                <div>
                    <button onClick = {this.submitHandler}>Show</button>
                </div>
            </form>
        )
    }
}

export default ControlledForm;