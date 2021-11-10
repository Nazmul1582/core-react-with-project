import React, { Component } from 'react';
class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError () {
        return{
            hasError : true
        }
    }
    
    render(){
        if(this.state.hasError){
            return <h1>May be some error occured</h1>
        }else{
            return this.props.children;
        }
    }
}
export default ErrorBoundary;