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

    <div className="container text-center">
          <div className="row">
                <div className="col">
               <img src="images/tree.png" alt="" className='imglogo' />
               <p className='description1'>Ideal with the right diet
</p>

                </div>
                <div className="col">
                <img src="images/cal.png" alt="" className='imglogo' />
                <p className='description1'>Low calorie
and healthy</p>
                </div>
                <div className="col">
                <img src="images/cow.png" alt=""  className='imglogo'/>
                <p className='description1'>Does not
contain milk fat</p>
                </div>
                
          </div>
    </div>
   
    <div className="container text-center pt-5">
            <p className='title'>JUST LOOK AT THIS GRAHAM BALLS</p>
                  
                  <div className="row">
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                  </div>
          
    </div>
    
    </>
  )
}

export default Home