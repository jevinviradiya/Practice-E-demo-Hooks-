import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import SpinerLoader from '../loader/SpinerLoader';
import { AddtoCart, DecCart } from '../state/action/ProductAction';

const Card = ({ data }) => {
    const dispatch = useDispatch()
    const {cartdata } = useSelector((state) => state.CartData)
    const state = useSelector((state) => state)
    console.log("state ///", state.ProductData.loading);

  return (
    <>
      {state.ProductData.loading ? <SpinerLoader/> :
        <div className="card" style={{ maxWidth: "18rem", maxHeight: "35rem", margin:"15px", overflow:"hidden",  boxShadow:"0 19px 38px rgba(0,0,0,0.30)"}}>
        
        
        <img className="card-img-top" src={data.images[0]} alt="Card image cap" style={{width: "18rem", height: "20rem"}}/>
        <div className="card-body" >
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description.slice(0, 45)}...</p>
            <p className="card-text">Price: ${data.price}</p>
        
            {/* <button className="btn btn-primary" onClick={() => console.log("click")} >Add to cart</button> */}
  
            {!cartdata[data.id] ? 
            <button className="btn btn-primary" onClick={() => dispatch(AddtoCart(data.id))}> Add to Cart </button>
            : <><button className="btn btn-primary" onClick={() => dispatch(AddtoCart(data.id))} style={{margin: "5px"}}> + </button>
              {cartdata[data.id]}
                  <button className="btn btn-danger" onClick={() => dispatch(DecCart(data.id))} style={{margin: "5px"}}> - </button></>}
            {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
            </div>
        </div>
      }
    </>
  )
}

export default Card