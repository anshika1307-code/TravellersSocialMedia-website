import React from "react";
import "./Mainhome.css";



function Mainhome() {
  
  return (
  
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./Images/logo.png" width={150} height={50} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="input-group">
          <div className="form-outline">
            <input
              id="search-input"
              type="search"
              className="form-control form1"
            />
          </div>
        </div>
        <div className="collapse navbar-collapse content1" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <img
                className="msg"
                src="./Images/mess.png"
                width={30}
                height={30}
                alt="noimage"
              />
            </li>
            <pre>&nbsp;</pre>
            <li className="nav-item">
              <img
                className="msg"
                src="./Images/noti.png"
                width={30}
                height={30}
                alt="noimage"
              />
            </li>
            <pre>&nbsp;</pre>
            <li className="nav-item">
              <img
                className="msg"
                src="./Images/profile.png"
                width={30}
                height={30}
                alt="noimage"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Mainhome;
