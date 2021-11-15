import React, { Component } from 'react'
import { ProductConsumer } from './Context/ProductContext';
import { UserConsumer } from './Context/UserContext'
class CompC extends Component{

    render(){
        return (
            <ProductConsumer>
                {
                    ({product, price}) => {
                        return (
                            <div>
                                Comp C
                                <h1>Product : {product} - Price: {price}</h1>
                                <UserConsumer>
                                    {
                                        ({name, age}) => {
                                            return <div>
                                                <h1>User: {name} - Age: {age}</h1>
                                            </div>
                                        }
                                    }
                                </UserConsumer>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
export default CompC;