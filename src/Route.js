import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './cart/Cart'
import Home from "./Home"
import ScrollComp from './scroll/Scroll';
import Navbar from './navbar/Navbar'

// const Home = lazy(() => import("./Home"))


const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <ScrollComp/>
      <Navbar/>
    <Routes>
      {/* <Suspense fallback={<h1>Loading HomeComp wait....</h1>}> */}
        <Route exact path="/" element={<Home/>} />
      {/* </Suspense> */}
      <Route   exact path="/cart" element={<Cart/>} />
      
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Routers;