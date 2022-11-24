import React, { useCallback, useMemo } from 'react'
import { useState, useEffect } from 'react';

const UseMemo = () => {

  const [input, setInput] = useState();
  const [dark, setDark] = useState(false);
  
  let doubleVal = useMemo(() => { 
    return  slowFunc(input)
}, [input])
// ---------------------------------------------------------------------
function foo(){
  return "foo value";
}
const memorozedValue = useMemo(foo, [])
const memorozedFunc = useCallback(foo , [])

console.log("memorized Value ///", memorozedValue)
console.log("memorized func ///", memorozedFunc())
// ---------------------------------------------------------------------
  const handleChange = (e) => {
    setInput(parseInt(e.target.value))
  }

  const handlestyle = useMemo(() => {
    return{
    color : dark ? "white" : "black",
    backgroundColor : dark ? "black" : "white"
    }
  }, [dark])
  useEffect(() => {
    document.title = `value ${doubleVal}`
  }, [input])
  return (
    <>
    <input type="number" value={input} onChange={handleChange}/>
      <div>UseMemo</div>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <h1 style={handlestyle} >{doubleVal}</h1>

      {/* <h1>{input}</h1> */}
    </>
  )
}

export default UseMemo


function slowFunc(num){
    for(let i=0; i<1000000000; i++) {}
    return num*2
}
