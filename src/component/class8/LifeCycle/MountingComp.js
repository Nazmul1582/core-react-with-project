import React, {Component} from 'react'
import MountingChild from './MountingChild';

class MountingComp extends Component{
    constructor(){
        super();
        this.state = ({
            name : 'Next Topper',
            lodding: true,
            data : []
        })

        console.log('I am from constructor')
    }

    static getDerivedStateFromProps(){
        console.log("from getDerivedStateFromProps");
        return 0;
    }

    componentDidMount(){
        console.log('from componentDidMount');
        let myData = [
            'Green',
            'Red' ,
            'Orange',
            'Blue'
        ]
        setTimeout(() => {
            this.setState({
                lodding: false,
                data: myData
            })
        }, 3000)

    }

    render(){
        console.log('form render');
        return (
            <div>
                {
                    this.state.lodding ? <h1>Lodding..........</h1> :
                    <div>{this.state.data.map((ele, ind) => (
                        <h1 key = {ind}>{ele}</h1>
                    ))}</div>
                }
                <MountingChild />
            </div>
        )
    }
}

export default MountingComp;