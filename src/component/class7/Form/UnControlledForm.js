import React, {Component} from 'react';

class UnControlledForm extends Component{
    constructor(){
        super();
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    submitHandler = (event) => {
        event.preventDefault();

        let name, email, password
        name = this.nameInput.current.value;
        email = this.emailInput.current.value;
        password = this.passwordInput.current.value;
        console.log(name, email, password)
    }

    render(){
        return (
            <div>
                <h1>Uncontrolled Form </h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type = "text" name = 'name' ref = {this.nameInput} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type = "email" name = 'email' ref = {this.emailInput} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type = "password" name = 'password' ref = {this.passwordInput} />
                    </div>
                    <button onClick = {this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UnControlledForm;