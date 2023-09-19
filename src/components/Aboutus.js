import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div>
        <hr></hr>
         <h1 className="heading"><strong>About Us</strong></h1>
        <div className="left"><div className="card border-light mb-3" style={{maxWidth: '1000px'}}>
            <div className="row g-4">
              <div className="col-md-4">
                <img src="./Images/a1.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>SHARE YOUR GHUMI GHUMI STORIES</b></h5>
                  <p className="card-text">Become a Ghumakkad and share your Travel stories with the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right"><div className="card border-light mb-3" style={{maxWidth: '1000px'}}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>KNOW EVERYTHING ABOUT OTHERS TRIP</b></h5>
                  <p className="card-text">Get full insight of a person's trip - Their Travel cost, Transportation details , Places they stayed , Food details, overall experience and plan your next trip</p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="./Images/a3.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="left"><div className="card border-light mb-3" style={{maxWidth: '1000px'}}>
            <div className="row g-4">
              <div className="col-md-4">
                <img src="./Images/a2.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>CONNECT WITH YOUR FELLOW GHUMAKKD</b></h5>
                  <p className="card-text">Chat with your Fellow Ghumakkads - Ask them about their trips or plan your next trip with them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right"><div className="card border-light mb-3" style={{maxWidth: '1000px'}}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>CATEGORY BASED SEARCH</b></h5>
                  <p className="card-text">Explore a place according to your Interest !!
                    Like photographers can see best place where other photographers are visiting 
                    Foodies can search the best places to eat</p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="./Images/a4.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="left"><div className="card border-light mb-3" style={{maxWidth: '1000px'}}>
            <div className="row g-4">
              <div className="col-md-4">
                <img src="./Images/a3.jpeg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>SEE WHAT PEOPLE ARE EXPLORING ?</b></h5>
                  <p className="card-text">Know the most visited places of an area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Aboutus;