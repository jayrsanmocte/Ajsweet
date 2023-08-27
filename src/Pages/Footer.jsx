  import React from 'react'

  const Footer = () => {
    return (
      <>
      <img src="/images/up.png" alt="" className='up'/>
      
    <footer className="footers text-center text-black">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-black btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* ... other social media links */}
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              {/* ... form content */}
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <div className="row">
            {/* ... links */}
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  
 
    
  </>
    
    );  
  };

  export default Footer