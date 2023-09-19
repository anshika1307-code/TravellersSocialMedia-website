import React from 'react';
import './Cards.css';

function Cards(props) {
    console.log();
  return (
    <div className='cards'>
        <div className='card'>
            <img src={props.imgsrc} alt="mypic" className='card_img card-img-top rounded-circle'/>
            <div className='card_Info'>
                <h3 className='card_title'>{props.title}</h3>
            </div>
        </div>
    </div>
  )
}

export default Cards;