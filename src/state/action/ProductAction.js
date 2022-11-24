import axios from "axios";
import { CART_PRODUCTS, GET_PRODUCT_FAILED, GET_PRODUCT_LOADING, GET_PRODUCT_SUCESS, SEARCH_FILTER, SINGLE_PRODUCT_REMOVE } from "../types/Type";
import { DEC_PRODUCT, CLEAR_CART } from './../types/Type';

export const ProductAction = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_PRODUCT_LOADING,
            payload : true,
        })
        //API CALL
        try{
            const res = await axios.get("https://dummyjson.com/products")
            if(res.status === 200){
                dispatch({
                    type: GET_PRODUCT_SUCESS,
                    payload: res,
                });
                
            }
                else {
                    dispatch({
                    type: GET_PRODUCT_FAILED,
                    payload: "Something wenyt wrong",
                })
                }
            }
            catch(error){
                dispatch({
                    type: GET_PRODUCT_FAILED,
                    payload: error,
                })
            }
        }
    }

export const AddtoCart = (id) => {
    return async (dispatch) => {
        // console.log("----------------------");
        dispatch({
            type: CART_PRODUCTS,
            payload : id,
        })
    }
}

export const DecCart = (id) => {
    return async (dispatch) => {
        // console.log("----------------------");
        dispatch({
            type: DEC_PRODUCT,
            payload : id,
        })
    }
}
export const SingleProDelete = (id) => {
    return async (dispatch) => {
        // console.log("----------------------");
        dispatch({
            type: SINGLE_PRODUCT_REMOVE,
            payload : id,
        })
    }
}

export const ClearCart = () => {
    return async (dispatch) => {
        // console.log("----------------------");
        dispatch({
            type: CLEAR_CART,
            // payload : id,
        })
    }
}
export const SearchData = (data) => {
    return async (dispatch) => {
        // console.log("----------------------");
        dispatch({
            type: SEARCH_FILTER,
            payload : data,
        })
    }
}