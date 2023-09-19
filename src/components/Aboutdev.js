import React from 'react';
import './Aboutdev.css';

function Aboutdev() {
  return (
    <div>
        <hr></hr>
    <b><p className="heading">About Developers</p></b>
    <br />
    <div className="img">
      <img src="./Images/d1.jpeg" className="rounded-circle" alt="Rounded Image" width={150} height={150} />
      <img src="/Images/d2.jpeg" className="rounded-circle " alt="Rounded Image" width={150} height={150} />
      <img src="/Images/d3.jpeg" className="rounded-circle " alt="Rounded Image" width={150} height={150} />
      <img src="/Images/d4.jpeg" className="rounded-circle " alt="Rounded Image" width={150} height={150} />
      <img src="/Images/d5.jpeg" className="rounded-circle" alt="Rounded Image" width={150} height={150} />    
    </div>
    <br />
    <div className="namebox">
      <b className="name">ANSHIKA GOEL</b>
      <b className="name"> &nbsp; &nbsp; &nbsp;  SIDDHARTH SARKHEL</b>
      <b className="name">  ABHISHEK RAWAT</b>
      <b className="name"> &nbsp;YADVENDRA RATHOR</b>
      <b className="name" style={{marginLeft: '32px'}}> &nbsp; &nbsp; RAJ MAURYA</b>
    </div>
    <div className="nameboxD">
      <p className="nameD">DEVELOPER</p>
      <p className="nameD" style={{marginLeft: '80px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DEVELOPER</p>
      <p className="nameD" style={{marginLeft: '120px'}}> DEVELOPER</p>
      <p className="nameD" style={{marginLeft: '100px'}}> &nbsp;UX/UI DESIGNER</p>
      <p className="nameD" style={{marginLeft: '85px', fontSize: '8px'}}> &nbsp; &nbsp; UX/UI DESIGNER &amp;<br /> &nbsp; &nbsp; CONTENT WRITER</p>
    </div>
  </div>
  )
}

export default Aboutdev;