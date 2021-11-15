import React, { Component } from 'react'
import CompB from './CompB';
import ProductContext from './Context/ProductContext';
class CompA extends Component{
    static contextType = ProductContext;
    render(){
        const {product, price} = this.context;
        return (
            <div>
                <h1> Comp A - Product : {product} - Price : {price} </h1>
                <CompB />
            </div>
        )
    }
}
export default CompA;