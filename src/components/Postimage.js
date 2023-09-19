import React from 'react';
import './Postimages.css';

function Postimage() {
  return (
    <>
    <div className='postimage'>
        <img src="./Images/postimage.png" width={700} height={600} alt="noimage" />
    </div>
    <div>
        <img className="imagee"src="./Images/jali.png" width={30} height={600} alt="noimage" />
    </div>
    </>
  )
}

export default Postimage