import React, {Component} from 'react';
class UnmountChild extends Component{
    
    componentWillUnmount(){
        console.log('Unmounted............');
    }

    render(){
        return (
            <div>
                <h1>Hello from Unmount Child</h1>
            </div>
        )
    }
}
export default UnmountChild;