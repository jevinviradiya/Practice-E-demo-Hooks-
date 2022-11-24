import React, { useRef } from 'react'

const UseRefComp = () => {
    
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
      console.log("Input value : ", inputRef.current.value
      
      );
    };


  return (
    
  // let inputval;
  // let res = inputElem.value;

  
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text"></input>
        <button type="submit">submit</button>
      </form>
    </>


  )
}

export default UseRefComp;