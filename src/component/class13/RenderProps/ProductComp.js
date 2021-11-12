import React, { Component } from 'react';
class ProductComp extends Component{

    render() {
        return (
            <div>
                <h1>{this.props.name(true)}</h1>
            </div>
        )
    }
}

export default ProductComp;