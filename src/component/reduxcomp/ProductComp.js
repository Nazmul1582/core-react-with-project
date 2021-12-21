import React from 'react';
import { connect } from 'react-redux';
import { buyLaptop } from '../../redux/laptop/laptopActions'

const ProductComp = (props) => {
    return(
        <div>
            <h1>Total Laptop - {props.totalLaptop}</h1>
            <button onClick={props.buyLaptop}>Buy Laptop</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalLaptop: state.totalLaptop
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyLaptop: () => dispatch(buyLaptop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComp);