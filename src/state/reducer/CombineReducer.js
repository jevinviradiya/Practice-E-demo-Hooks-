import { combineReducers } from "redux";
import {CartData } from "./CartReducer"
import { ProductData } from "./ProductGet";

const reducer = combineReducers({
    ProductData,
    CartData,
})

export default reducer;