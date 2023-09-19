import React from "react";

import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-dark fixed-top ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./Images/logo.png" width={150} height={50} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="text-white">About Us</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="text-white"><Link className='ldec' to='/signup'>
            Sign up
          </Link></span></a>
              </li>
              <pre>&nbsp;</pre>
              <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0 text-white loginicon" >
                <Link className='ldec' to ="/Login" >Log In</Link>
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
