import { BUY_LAPTOP  } from "./laptopTypes";
const initialState = {
    totalLaptop : 500
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_LAPTOP : 
            return {
                ...state, totalLaptop: state.totalLaptop - action.payload
            }
        default : return state
    }
}
export default reducer;