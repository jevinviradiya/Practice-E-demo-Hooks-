import { CART_PRODUCTS, SINGLE_PRODUCT_REMOVE } from "../types/Type"
import { DEC_PRODUCT, CLEAR_CART } from './../types/Type';


const initialState = {
    cartdata: {},
}

export const CartData = (state = initialState, action) => {
    switch(action.type){
        case CART_PRODUCTS:
            return {
                ...state,
                cartdata: {...state.cartdata, [action.payload]: (state.cartdata[action.payload] || 0) + 1},
            }

            case DEC_PRODUCT:
            // console.log("'''''''''''''", state.cartdata[action.payload])
            return {
                ...state,
                cartdata: {...state.cartdata, [action.payload]: state.cartdata[action.payload] - 1},
            }

            case SINGLE_PRODUCT_REMOVE:
            // console.log("'''''''''''''", state.cartdata[action.payload])
            return {
                ...state,
                cartdata: {...state.cartdata, [action.payload]: 0},
            }

            case CLEAR_CART:
            // console.log("'''''''''''''", state.cartdata[action.payload])
            return {
                ...state,
                cartdata: {},
            }

        default:
            return state;
    }
}