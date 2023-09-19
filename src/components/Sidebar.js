import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="card cardd">
      <div className="lineone">
        <img
          src="./Images/createpost.png"
          className="oone"
          width={30}
          height={30}
          alt="noimage"
        />
        <div className="textt">
          <h3 className="texttt ee">Create Post</h3>
        </div>
        <div className="linetwo">
          <img className="oone" src="./Images/Home.png" width={30} height={30} alt="noimage" />
          <div className="textt">
            <h3 className="texttt">Home</h3>
          </div>
        </div>
        <div className="linethree">
          <img className="oone" src="./Images/flag.png" width={30} height={30} alt="noimage" />
          <div className="textt">
            <h3 className="texttt">Flag</h3>
          </div>
        </div>
        <div className="linefour">
          <img className="oone" src="./Images/grid.png" width={30} height={30} alt="noimage" />
          <div className="textt">
            <h3 className="texttt">Category</h3>
          </div>
        </div>
        <div className="linefive">
          <img className="oone" src="./Images/aboutus.png" width={30} height={30} alt="noimage" />
          <div className="textt">
            <h3 className="texttt">About Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
