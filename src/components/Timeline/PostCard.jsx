

import React, { useState } from 'react';
import DairySpiralImage from '../../images/spiral.png';
import DairySpiralImage2 from '../../images/spiral-hori.png';
import Postimage from '../../images/1.jpg';
import Postvideo from '../../images/2.mp4';
import Postimage2 from '../../images/3.jpg';
import Postimage3 from '../../images/4.jpg';
import topL1 from '../../images/topL1.png';
import experience from '../../assets/experience.png';
import cost from '../../assets/cost.png';
import location from '../../assets/location.png';
import message from '../../assets/message.png';
import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import share from '../../assets/share.png';
import avatar from '../../assets/avatar.webp';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const PostCard = ({ post }) => {
  const [selectedButton, setSelectedButton] = useState('Post');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const [rating, setRating] = useState(4);
  const percentage = ((rating - 1) / 4) * 100;
  const getEmoji = (rating) => {
    switch (rating) {
      case 1: return '😟';  // Sad
      case 2: return '😕';  // Slightly Sad
      case 3: return '😐';  // Neutral
      case 4: return '😊';  // Happy
      case 5: return '😁';  // Very Happy
      default: return '😐';
    }
  };
  // const images = [
  //   Postimage,
  //   Postimage2,
  //   Postimage3,
  //   topL1,
    
  // ];
  const media = [
    { type: 'image', src: Postimage },
    { type: 'image', src: Postimage2 },
    { type: 'video', src: Postvideo },
    { type: 'image', src: Postimage3 },
    { type: 'image', src: topL1 }
  ];
  console.log("post data", post);
  return  (
    <div className="flex-1 h-full mt-4 mb-4 flex flex-row">
      {/* Sidebar */}
      <div className="lg:hidden w-1/6 p-4 border-r border-gray-300">
        {/* Sidebar content */}
        <div className="sticky top-4">
          {/* <h2 className="text-lg font-semibold mb-4">Sidebar</h2> */}
          <img
            className="w-11 mx-2 rounded-full mb-5"
            src={avatar}
            alt="Home"
          />
          <ul>
            <li className="mb-2">
              <a href="#"><img src={like} className='m-1 w-11' alt='' />2</a>
              
            </li>
            <li className="mb-2">
              <a href="#"><img src={comment} className='m-1 w-9' alt='' />5</a>
            </li>
            <li className="mb-2">
              <a href="#"><img src={share} className='m-1 w-9' alt='' /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-full mb-8 ml-3 relative w-5/6 lg:w-full">
      <div className="lg:flex lg:items-stretch w-full">
        {/* Picture Preview Section */}
        
          <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg shadow-lg overflow-hidden relative">
  {post?.media?.length > 0 ? (
    <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
      {post.media.map((url, index) => (
        <div key={index} className="relative w-full" style={{ paddingTop: '100%' }}>
          {url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg") ? ( // Check if the URL is a video
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
              <source src={url} type="video/mp4" />
            </video>
          ) : (
            <img src={url} alt={`Slide ${index}`} className="absolute top-0 left-0 w-full h-full object-cover" />
          )}
        </div>
      ))}
    </Carousel>
  ) : (
    <p className="text-center py-4">No media available</p>
  )}
</div>


        {/* Spiral */}
        {/* <img src={DairySpiralImage} alt="Dairy Spiral" className="absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-16 lg:h-full top-0 left-1/2 transform -translate-x-1/2 w-full h-16 rotate-90 lg:rotate-0" /> */}
        <img src={DairySpiralImage} alt="Dairy Spiral" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-full hidden lg:block" />
        {/* <img src={DairySpiralImage2} alt="Dairy Spiral" className="absolute top-96 left-1/2 transform -translate-x-1/2 w-full h-16 lg:hidden" /> */}
        {/* Post Details Section */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg h-full">
          {/* Post Caption */}
          
          <div className="mb-4 p-4 rounded-t shadow-lg">
            
            <h2 className="text-lg xl:text-xl font-semibold pl-6">{post?.mainLocation}</h2>
            <p className="text-gray-700 text-sm lg:text-base pl-6">{post?.caption}</p>
          </div>
          <div className='flex p-2 space-x-2 lg:pl-9'>
            <button className={`rounded-lg bg-gray-400 text-gray-600 text-xs  p-2 flex ${selectedButton === 'Experience' ? 'bg-white border border-gray-400' : ''}`} onClick={() => handleButtonClick('Experience')}>
              <img src={experience} className='m-1 w-5' alt='' />Experience
            </button>
            <button className={`rounded-lg bg-gray-400 text-gray-600 p-2 text-xs flex ${selectedButton === 'Cost' ? 'bg-white border border-gray-400' : ''}`} onClick={() => handleButtonClick('Cost')}>
              <img src={cost} className='m-1 w-5' alt='' />Cost
            </button>
            <button className={`rounded-lg bg-gray-400 text-gray-600 p-2 text-xs flex ${selectedButton === 'Places' ? 'bg-white border border-gray-400' : ''}`} onClick={() => handleButtonClick('Places')}>
              <img src={location} className='m-1 w-5' alt='' />Places
            </button>
            <button className={`rounded-lg bg-gray-400 text-gray-600 p-2 text-xs flex ${selectedButton === 'Messages' ? 'bg-white border border-gray-400' : ''}`} onClick={() => handleButtonClick('Messages')}>
              <img src={message} className='m-1 w-5' alt='' />Messages
            </button>
            <button className={`rounded-lg bg-gray-400 text-gray-600 p-2 flex ${selectedButton === 'More' ? 'bg-white border border-gray-400' : ''}`} onClick={() => handleButtonClick('More')}>
              <img src={more} className='m-1 w-5' alt='' />
            </button>
          </div>
          <div className="rounded-t-lg border border-gray-400 mx-2 ml-9">
            {/* Other Post Details (Experience, Cost, Place, Message etc.) */}
            <div className="flex items-center text-gray-600 p-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
              <p>{selectedButton}</p>
              <span className="mx-2">•</span>
              <p>Posted by {post.user.username}</p>
              <span className="mx-2">•</span>
              <p>{post.createdAt}</p>
            </div>
          </div>
          <div className="border border-gray-400 mx-2 ml-9">
         

<div className="flex flex-col items-center p-4">
      <div className="w-full h-2 bg-gray-200 rounded-lg relative">
        <div className="absolute bg-rating-gradient h-2 rounded-lg" style={{ width: `${percentage}%` }}></div>
        {/* <div
          className="absolute -top-1 -translate-x-1/2 bg-rating-gradient w-4 h-4 rounded-full"
          style={{ left: `${percentage}%` }}
        ></div> */}
        <div
          className="absolute -top-3 text-xl"
          style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
        >
          {getEmoji(rating)}
        </div>
      </div>
      <div className="mt-2 text-lg font-semibold">
        Rating: {rating}
      </div>
    </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio molestiae consequatur labore error. Ab quaerat omnis, ad maxime rerum et impedit molestias facere! Ut rerum est commodi consequuntur, vel iste temporibus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ad consectetur dolore quidem quaerat sapiente aut impedit quo odit, dolor quae rerum, blanditiis libero eaque at repellendus sed eius corrupti, reprehenderit incidunt.</p>
          </div>
          <div className="rounded-b-lg border border-gray-400 mx-2 border-collapse ml-9">
            {/* Like, Comment, Share Icons */}
            <div className="flex mt-4">
              <button className="flex items-center mr-4 text-gray-600">
                <img src={like} className='m-1 w-6' alt='' />
                <span>Like</span>
              </button>
              <button className="flex items-center mr-4 text-gray-600">
                {/* <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                </svg> */}
                <img src={comment} className='m-1 w-6' alt='' />
                <span>Comment</span>
              </button>
              <button className="flex items-center text-gray-600">
                {/* <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg> */}
                <img src={share} className='m-1 w-6' alt='' />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PostCard;





















