import React, {Component} from 'react';
import './style.css'
class RegisterFrom extends Component{
    constructor(){
        super();
        this.state = ({
            name: "",
            age: null,
            email: "",
            password: "",
            telephone: "",
            division: "",
            country: "",
            interested: []
        })
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    checkboxChangeHandler = (event) => {
        if(event.target.checked){
            this.setState({
                interested: [...this.state.interested, event.target.value]
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
            <div className = 'container'>
                <h1>Register Form</h1>
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
                        <label>Email : </label>
                        <input 
                        type = 'email'
                        name = 'email'
                        value = {this.state.email}
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
                        <label> Telephone : </label>
                        <input 
                        type = "number" 
                        name = 'telephone' 
                        value = {this.state.telephone} 
                        onChange = {this.changeHandler} />
                    </div>
                    <div>
                        <label>Select Your Division </label>
                        <select 
                        name = 'division'
                        value = {this.state.division}
                        onChange = {this.changeHandler}>
                            <option>Select your division </option>
                            <option value = "dha">Dhaka</option>
                            <option value = "ctg">Chattagram</option>
                            <option value = "raj">Rajshahi</option>
                            <option value = "ran">Rangpur</option>
                            <option value = "khu">Khulna</option>
                            <option value = "bar">Barisal</option>
                            <option value = "mym">Mymensing</option>
                        </select>
                    </div>
                    <div>
                        <label>Country : </label>
                        <input 
                        type = "text" 
                        name = 'country' 
                        value = {this.state.country} 
                        onChange = {this.changeHandler} />
                    </div>
                    <div className = 'items'>
                        <p>Select your interest</p>
                        <input type = 'checkbox' name ="JavaScript" value = "JavaScript" onChange = {this.checkboxChangeHandler} />
                        <label>JavaScript</label>
                        <input type = 'checkbox' name ="PHP" value = "PHP"  onChange = {this.checkboxChangeHandler} />
                        <label>PHP</label>
                        <input type = 'checkbox' name ="Phython" value = "Phython"  onChange = {this.checkboxChangeHandler} />
                        <label>Phython</label>
                        <input type = 'checkbox' name ="Java" value = "Java"  onChange = {this.checkboxChangeHandler} />
                        <label>Java</label>
                    </div>
                    <br />
                    <div>
                        <button onClick = {this.submitHandler}>Show</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default RegisterFrom;