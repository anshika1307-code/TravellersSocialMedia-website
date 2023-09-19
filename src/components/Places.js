import React from 'react'
import './Places.css';


function Places() {
  return (
    <div>
       <h1 className="textsytle sectiontext"><span className="lightstyle">Most</span> <span className="gbold">Visited Places</span> <span className="lightstyle">this week</span></h1>
        <center><div className="BoxArea">
            <div className="img__wrap">
              <img className="imgsize" src="./Images/Rishikesh.jpeg" alt="Girl in a jacket" width={130} height={90} />
              <p className="img__description">Rishikesh</p>
            </div>
            <div className="img__wrap">
              <img className="imgsize" src="./Images/Jaipur.jpeg" alt="Girl in a jacket" width={130} height={90} />
              <p className="img__description">Jaipur</p>
            </div>
            <div className="img__wrap">
              <img className="imgsize" src="./Images/Spitivalley.jpeg" alt="Girl in a jacket" width={130} height={90} />
              <p className="img__description">Spitivalley</p>
            </div>
          </div></center>
      </div>
  )
}

export default Places;