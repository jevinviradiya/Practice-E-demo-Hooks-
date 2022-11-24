import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import { AddtoCart, SingleProDelete } from '../state/action/ProductAction';
import { DecCart, ClearCart } from './../state/action/ProductAction';




const Cart = () => {
    const dispatch = useDispatch()
    const {cartdata } = useSelector((state) => state.CartData)
    const {products} = useSelector((state) => state.ProductData)
    let filterData = products.filter(x => cartdata[x.id]);
    // console.log("car00tdata",Object.keys(cartdata), Object.keys(cartdata).includes(x.id) );


    const columns = [
        {
            name: 'Image',
            selector: row => <img src={row.images[0]} alt="" style={{width: "150px", height: "150px"}}/> ,
        },
        {
            name: 'Brand',
            selector: row => row.brand,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Desc',
            selector: row => row.description.slice(0, 30),
        },
        {
            name: 'Price',
            selector: row => `$ ${row.price}`,
        },
        {
            name: 'Button',
            selector: row => { return (<><button type="button" className="btn btn-danger" style={{margin: "5px"}} 
                            onClick={() => dispatch(DecCart(row.id))}>-</button>
                            {cartdata[row.id]}
                            <button type="button" className="btn btn-primary" style={{margin: "5px"}} 
                            onClick={() => dispatch(AddtoCart(row.id))}>+</button></>) },
        },
        {
            name: 'Total Price',
            selector: row =>  `$ ${cartdata[row.id] * row.price}`,
        },
        {
            name: 'Delete',
            selector: row => <i className="fa fa-solid fa-trash fa-2x" type="button" onClick={() => dispatch(SingleProDelete(row.id))}></i>,
        },
    ];


  return (
    <>
    {filterData.length > 0 && <button className="btn btn-danger" onClick={() => dispatch(ClearCart())}>Clear Cart</button>}
    
        {filterData ? 
        <>
        
        <DataTable
            columns={columns}
            data={filterData}
        /></> : "There is no record to display"
        }
    </>
  )
}

export default Cart