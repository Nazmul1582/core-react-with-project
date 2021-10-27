import React, {Component} from 'react';
// import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor(){
        super();
        this.state = {
            name : "Mahmud",
            age  : 10,
            isLoggedIn : true
        }
    }
    changeNameHandler = (n) => {
        this.setState({
            name : n,
            age : 9
        })
    }
    render(){
        
        // conditional rendering
        // 1. if/else
        // 2. element variables
        // 3. ternary
        // 4. short circuit

        // const {isLoggedIn, name} = this.state;
        // =========== if / else ==========
        // if(this.state.isLoggedIn){
        //     return (
        //         <h1> Welcome {this.state.name}</h1>
        //     )
        // }else{
        //     return <h1>You are not an authenticated user. Please login.</h1>
        // }

        // ================ element variables ===================
        // let message;
        // if(isLoggedIn){
        //     message = <h1> Welcome {name} </h1>
        // }else{
        //     message =  <h1>You are not an authenticated user. Please login.</h1>
        // }
        
        // return <div>
        //     {message}
        // </div>

        // ================= Ternary =====================
        const {isLoggedIn, name} = this.state;
        return (
            <div>
                {isLoggedIn ? <h1>Welcome {name} </h1> : 
            <h1>You are not authenticated user</h1>}
            </div>
        )

        // ================ short circuit ===============
        // return isLoggedIn && <h1>Welcome Mr. {name}</h1>
        // return (
        //     <div>
        //         <h1>Excuse me, sir.</h1>                
        //         {isLoggedIn && <h1>Who is {name} Hasan?</h1>}
        //         <h1>Do you know him?</h1>
        //     </div>
        // )

        // ========================================================

        // const {name, age} = this.state;
        // return (
            // <div>
            //     <h1>Change Your Information</h1>
            //     <h2>Your Name : {name} </h2>
            //     <h2>Your Age : {age}</h2>
            //     <ChildComp changeNameHandler = {this.changeNameHandler} />
            // </div>
        // )
    }
}
export default ParentComp;