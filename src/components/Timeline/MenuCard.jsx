// import React, {useState} from 'react';
// import CreatePostModal from './CreatePostModal'
// const MenuCard = () => {
//     const [showModal, setShowModal] = useState(false);

//   const handleCreatePost = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   return (
//     <div className=" max-w-xs ml-3 mt-4 shadow-lg p-7 font-montserrat font-semibold text-lg">
     
//       <ul>
//         <li className="flex items-center mb-5">
//           <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//           </svg>
//           <button onClick={handleCreatePost}>Create Post</button>
//           {showModal && <CreatePostModal onClose={handleCloseModal} />}

//         </li>
//         <li className="flex items-center mb-5">
//           <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//           </svg>
//           <a href="#">Home</a>
//         </li>
//         <li className="flex items-center mb-5">
//           <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//           </svg>
//           <a href="#">Flag</a>
//         </li>
//         <li className="flex items-center mb-5">
//           <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//           </svg>
//           <a href="#">Category</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default MenuCard;


// MenuCard.js
import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';
import add from '../../assets/add.png';
import home from '../../assets/home.png';
import flag from '../../assets/flag.png';
import grid from '../../assets/grid.png';
import group from '../../assets/group.png';
import TravelPostForm from './TravelPostForm';
const MenuCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleCreatePost = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-xs ml-3 mt-4 p-3 font-montserrat font-semibold text-[13px]">
      <ul>
        <li className="flex items-center mb-5">
          {/* <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg> */}
          <img
            className="w-6 h-6 m-2"
            src={add}
            alt="Home"
          />
          <button onClick={handleCreatePost}>Create Post</button>
        </li>
        <li className="flex items-center mb-5">
        <img
            className="w-6 h-6 m-2"
            src={home}
            alt="Home"
          />
          <a href="#">Home</a>
        </li>
        <li className="flex items-center mb-5">
        <img
            className="w-6 h-6 m-2"
            src={flag}
            alt="Home"
          />
          <a href="#">Flag</a>
        </li>
        <li className="flex items-center mb-5">
        <img
            className="w-6 h-6 m-2"
            src={grid}
            alt="Home"
          />
           <button
        onClick={() => setShowForm(true)}
        className=" rounded-lg"
      >
        Create Travel Story
      </button>
        </li>
        <li className="flex items-center mb-5">
        <img
            className="w-6 h-6 m-2"
            src={group}
            alt="Home"
          />
          <a href="#">Travel Plans</a>
        </li>
        <li className="flex items-center mb-5">
        <img
            className="w-6 h-6 m-2"
            src={group}
            alt="Home"
          />
          <a href="#">Events</a> 
        </li>
        <li className="flex items-center mb-5"> 
        <img
            className="w-6 h-6 m-2"
            src={group}
            alt="Home"
          />
          <a href="#">Find Friends</a> 
        </li>
      </ul>
      {showForm && <TravelPostForm onClose={() => setShowForm(false)} />}
      {showModal && <CreatePostModal onClose={handleCloseModal} />}
    </div>
  );
};

export default MenuCard;
