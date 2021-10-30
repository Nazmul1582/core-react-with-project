import React, {Component} from 'react';

class MountingChild extends Component{
    constructor(){
        super();
        this.state = ({
            name : "Hello Child Mounting Phase"
        })
        console.log('from child constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('from child getDerivedStateFromPorps');
        return 0;
    }

    componentDidMount(){
        console.log('form child componentDidMount');
    }

    render(){
        console.log('from child render');
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default MountingChild;