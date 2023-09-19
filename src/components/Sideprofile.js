import React from 'react';
import './Sideprofile.css';

function Sideprofile() {
  return (
    <>
    <div className="box">
    <div className="imgg">
          <img src="./Images/d5.jpeg" className="rounded-circle" alt="Rounded Image" width={140} height={140} />
        </div>
        <div className="boxDesc" style={{marginLeft: '40px'}}>
          <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title " style={{marginTop: '50px'}}><center><b><a href='https://getbootstrap.com/docs/5.0/forms/form-control/'>RAJ MAURYA</a></b></center></h5>
              <div style={{borderBottom: '2px solid rgb(132, 129, 129)'}} />
              <br />
              <h6 className="card-subtitle mb-2 text-muted"><center><b style={{marginRight: '45px', marginLeft: '25px'}}>13</b><b style={{marginRight: '70px'}}>13</b><b style={{marginRight: '40px'}}>13</b></center></h6>
              <h6 className="card-subtitle mb-2 text-muted"><b><center style={{fontSize: '14px'}}>Posts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Followers &nbsp;&nbsp;&nbsp;Following</center></b></h6>
              <p className="card-text" style={{marginTop: '30px', fontSize: '12px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Sideprofile;