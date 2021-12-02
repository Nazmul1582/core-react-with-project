import React, { useReducer, useContext } from 'react';
import ChildCompA from './ChildCompA';
import ChildCompB from './ChildCompB';

const initialState = {
    count1: 5
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment' :
            return {count1: state.count1 + action.value};
        case 'decrement' :
            return {count1: state.count1 - action.value};
        case 'reset' :
            return {count1: initialState.count1};
        default :
            return state
    }
}
export const CountContext = React.createContext();
const ParentUseReducerWithUseContext = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <CountContext.Provider value={{count, dispatch}}>
                <ChildCompA />
                <ChildCompB />
            </CountContext.Provider>
        </div>
    )
}

export default ParentUseReducerWithUseContext;