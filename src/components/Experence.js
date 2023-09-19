import React from 'react';
import './Experence.css';

function Experence() {
  return (
    <>
    <div className="mainbox">
        <div className="upperpanel">
          <img src="./Images/d3.jpeg" className="rounded-circle" alt="Rounded Image" width={40} height={40} />
          <div>
            <p className="pp" style={{marginLeft: '8px', display: 'inline', fontSize: '14px'}}>Abhishek Rawat</p>
            <p style={{fontSize: '8px', marginLeft: '8px', marginTop: '0%'}}>07-10-22 | 03:10 PM</p>
          </div>
          <div>
            <b style={{marginLeft: '75px', fontSize: '13px'}}>Pattaya Beach</b>
            <p style={{fontSize: '10px', marginLeft: '120px'}}>Thailand</p>
          </div>
          <br />
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-secondary spacee" style={{bsBtnPaddingY: '.25rem', bsBtnPaddingX: '.8rem', bsBtnFontSize: '.69rem', color: 'rgb(182, 171, 247)'}}>Experience</button>
          <button type="button" className="btn btn-secondary spacee" style={{bsBtnPaddingY: '.29rem', bsBtnPaddingX: '.8rem', bsBtnFontSize: '.69rem'}}>Cost</button>
          <button type="button" className="btn btn-secondary spacee" style={{bsBtnPaddingY: '.29rem', bsBtnPaddingX: '.8rem', bsBtnFontSize: '.69rem'}}>Places</button>
          <button type="button" className="btn btn-secondary spacee" style={{bsBtnPaddingY: '.29rem', bsBtnPaddingX: '.8rem', bsBtnFontSize: '.69rem'}}>Message</button>
          <button type="button " className="btn btn-secondary spacee" style={{bsBtnPaddingY: '.29rem', bsBtnPaddingX: '.6rem', bsBtnFontSize: '.74rem'}}>
            <center>
              <div className="test" />
            </center>
          </button>
           </div>
        <div className="desc">
          <div className="title" style={{marginBottom: '8px'}}><b>Overall</b><br /><b>Experience</b></div>
          <div style={{display: 'inline-flex'}}>
            <div className="slider"><img className="icons" src="./Images/slider.jpeg" alt="Icon" width={220} height={20} /></div>
            <b style={{marginLeft: '28px', marginBottom: '8px'}}>Good</b>
          </div>
          <div className="des" style={{fontSize: '10px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the.
          </div>
          <br />
          <div className="hl" />
          <div className="underpanel" style={{display: 'inline-flex'}}>
            <div className="i1" style={{fontSize: '9px', display: 'inline-flex', marginLeft: '30px'}}>
              <i className="fa-regular fa-heart fa-2x" />
              <div style={{marginLeft: '10px'}}>
                <b>
                  150
                </b><br />
                <b>Likes</b>
              </div>
            </div>
            <div className="i2" style={{fontSize: '9px', display: 'inline-flex', marginLeft: '40px'}}>
              <i className="fa-regular fa-comment fa-2x" />
              <div style={{marginLeft: '10px'}}>
                <b>
                  90
                </b><br />
                <b>Comments</b>
              </div>
            </div>
            <div className="i3" style={{fontSize: '9px', display: 'inline-flex', marginLeft: '30px'}}>
              <i className="fa-solid fa-share fa-2x" />
              <div style={{marginLeft: '10px'}}>
                <b>
                  30
                </b><br />
                <b>Shares</b>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
};

export default Experence;