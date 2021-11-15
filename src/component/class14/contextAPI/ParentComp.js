import React, { Component } from 'react'
import CompA from './CompA';
import { ProductProvider } from './Context/ProductContext';
import { UserProvider } from './Context/UserContext';
class ParentComp extends Component{
    constructor(){
        super();
        this.state = {
            product : "Laptop",
            price: '50k',
            name: 'Next Topper',
            age: 2
        }
    }
    render(){
        return (
            <div>
                <ProductProvider value={{product: this.state.product, price: this.state.price}}>
                    <UserProvider value={{name: this.state.name, age: this.state.age}}>
                        <CompA />
                    </UserProvider>
                </ProductProvider>
            </div>
        )
    }
}
export default ParentComp;