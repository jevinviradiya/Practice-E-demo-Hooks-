import React from 'react'
import CircleLoader
from "react-spinners/CircleLoader";

import ContentLoader from "react-content-loader"



const SpinerLoader = () => {
  return (
    <>
 <ContentLoader 
    speed={1}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#a75858"
    foregroundColor="#ecebeb"
    // {...props}
  ></ContentLoader>
    <CircleLoader


        color={"blue"}
        loading={true}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </>
  )
}

export default SpinerLoader