import React from 'react'

const Navbar = () => {
  return  (
    <>
    <div className="navbarcolor">
          <div className="container text-center ">
          <img src="src\assets\logo.png" alt="" className='logo' /></div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarCenteredExample"
                aria-controls="navbarCenteredExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Order Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
    
    </>
  );
};

export default Navbar