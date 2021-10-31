import React, {Component} from 'react';
class UpdatingPhase extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        console.log('from constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('from getDerivedStateFromProps');
        return 0;
    }
    getSnapshotBeforeUpdate(){
        console.log('from getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('from componentDidUpdate');
    }
    submitHandler = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render(){
        console.log('from render');
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.submitHandler}>increment</button>
            </div>
        )
    }
}
export default UpdatingPhase;