import React from 'react'

const Home = () => {
  return (
    <>
    <div className='hero'>
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                                
                        <h2 className=''>The <span style={{ color: '#962d1c' }}>Graham balls  </span>
                                    <p><h5 className='description'>are dessert bites made of graham cracker crumbs, condensed milk and cream; they are shaped into balls and then coated with more crumbs. </h5></p> </h2>
                                    <button className='button1'>Order Now</button></div> 
                        <div className="col">
                        <img src="images/home.jpg" alt="" className='homelogo'/>
                        </div>
                        
            </div>
                
        </div>
        
    </div>
    
    <img src="/images/down.png" alt="" className='down'/>

    
    

    </>
  )
}

export default Home