import React from 'react';
import './Social.css';

function Social() {
  return (
    <div className="Footer">
        <div className="icon">
          <img className="icons" src="./Images/i1.png" alt="Icon" width={55} height={15} />
          <img className="icons" src="./Images/i2.png" alt="Icon" width={55} height={15} />
          <img className="icons" src="./Images/i3.png" alt="Icon" width={55} height={15} />
          <div className="icons"><div className="vl" /></div>
          <p className="lightdev" style={{paddingLeft: '20px'}}>Made with Love</p>
        </div>
      </div>
  )
}

export default Social;