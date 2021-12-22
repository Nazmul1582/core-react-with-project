import { BUY_MOBILE } from './mobileTypes'

export const buyMobile = (num) => {
    return {
        type: BUY_MOBILE,
        payload: num
    }
}