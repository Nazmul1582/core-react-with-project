import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyLaptop } from '../../../redux/laptop/laptopActions';
import { buyMobile } from '../../../redux/mobile/mobileActions';

const AnotherProductComp = () => {
    const {laptop, mobile: {totalMobile}} = useSelector(state => state);
    const {totalLaptop} = laptop;
    const [number, setNumber] = useState(1)

    const dispatch = useDispatch();
    return(
        <div>
            <h3>From Hook</h3>
            <h1>Total Laptop - {totalLaptop}</h1>
            <button onClick={()=>dispatch(buyLaptop(10))}>Buy</button>

            <h1>Total Mobile - {totalMobile}</h1>
            <input onChange={e => setNumber(e.target.value)} value={number} />
            <button onClick={()=> dispatch(buyMobile(number))}>Buy</button>
        </div>
    )
}

export default AnotherProductComp;