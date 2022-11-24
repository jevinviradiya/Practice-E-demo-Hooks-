import React, {useEffect} from "react";
import './App.css';
import {ProductAction} from "./state/action/ProductAction"
import {useDispatch} from "react-redux";
// import Navbar from "./navbar/Navbar"
import Routers from "./Route";

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ProductAction())
  }, [])
  
  return (
    <>
      <Routers/>
    </>
  );
}

export default App;
