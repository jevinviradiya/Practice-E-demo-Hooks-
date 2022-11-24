import React, { lazy, Suspense, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Card from "./card/Card"
import UseMemo from './PRACTICE/UseMemo'
import UseRefComp from './PRACTICE/useRef'
import Search from './search/Search'
import ScrollComp from './scroll/Scroll';
import { ProductAction } from './state/action/ProductAction'
import SpinerLoader from './loader/SpinerLoader';

// const Card = lazy(() => import('./card/Card')) 

const Home = () => {

    // const dispatch = useDispatch()
    const {products} = useSelector((state) => state.ProductData)
    const data = products.map(el => el.title)
    // console.log("title", data);
    
  return (
    <>
    <UseRefComp />
    <ScrollComp/>
    <UseMemo />
    <Search />
    <div style={{margin: "20px"}}>
    <div style={{ display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent: "space-between"}}>
      {/* <Suspense fallback={<SpinerLoader/>} > */}
        { products && products.map(el => <Card data={el} key={el.id} /> ) }
      {/* </Suspense> */}
    </div>
    </div>  
    </>
  )
}

export default Home