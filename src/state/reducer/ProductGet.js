import {  GET_PRODUCT_FAILED, GET_PRODUCT_LOADING, GET_PRODUCT_SUCESS, SEARCH_FILTER } from "../types/Type";

const initialState = {
    products: [],
    data: {},
    loading: true,
    error: "",
    searchdata: [],
};

export const ProductData = (state = initialState, action) => {

    switch(action.type){
        case GET_PRODUCT_LOADING :
            return {
                ...state,
                loading: action.payload
            }
            
            case GET_PRODUCT_SUCESS : 
            return {
                ...state, 
                products: action.payload.data.products,
                data: action.payload,
                loading: false
        }

        case GET_PRODUCT_FAILED : 
        return {
            ...state, 
            error: action.payload
        }

        case SEARCH_FILTER : 
        // console.log("data filter", state.data.data.products)
        return {
            ...state, 
            products: state.data.data.products.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

        default :
            return state;

        }
}
