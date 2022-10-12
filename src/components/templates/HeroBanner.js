import React from 'react'
const HeroBanner = () => {
  return ( 
    <>
      <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fs-1 fw-bold">The Rick and Morty API</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4"> This is a app to see and search all characters of Rick and Morty serie, and more</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            </div>
          </div>          
        </div>
      </>
   );
}
 
export default HeroBanner;