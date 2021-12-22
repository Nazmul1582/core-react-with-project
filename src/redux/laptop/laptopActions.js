import { BUY_LAPTOP } from "./laptopTypes"

export const buyLaptop = (num) => {
    return{
        type: BUY_LAPTOP,
        payload: num
    }
}