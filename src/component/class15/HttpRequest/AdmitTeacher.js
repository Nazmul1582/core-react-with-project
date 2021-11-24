import React, { Component } from 'react';
import axios from 'axios'
class AdmitTeacher extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            username: '',
            age : '',
            phone: '',
            email: '',
            password: ''
        }
    }    
    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        const data = this.state;
        axios.post('http://localhost:5000/admin/admit-teacher', data)
        .then(res => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        return (
            <form>
                <div>
                    <label>Name : </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Username : </label>
                    <input type='text' name='username' value={this.state.username} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Age : </label>
                    <input type='number' name='age' value={this.state.age} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Phone : </label>
                    <input type='number' name='phone' value={this.state.phone} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Email : </label>
                    <input type='email' name='email' value={this.state.email} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
                </div>
                <button onClick={this.submitHandler}>Submit</button>
            </form>
        )
    }
}
export default AdmitTeacher;