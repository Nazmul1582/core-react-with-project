import React, { Component } from 'react'
import ProductContext from './Context/ProductContext'
import CompC from './CompC';
class CompB extends Component{

    render(){
        return (
            <div>
                <h1>Comp B - Product : {this.context.product} </h1>
                <CompC  />
            </div>
        )
    }
}

CompB.contextType = ProductContext;
export default CompB;