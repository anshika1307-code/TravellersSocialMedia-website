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
import React, { useState } from "react";
import CreatePostModal from "./CreatePostModal";
import add from "../../assets/add.png";
import home from "../../assets/home.png";
import flag from "../../assets/flag.png";
import grid from "../../assets/grid.png";
import group from "../../assets/group.png";
import TravelPostForm from "./TravelPostForm";
import { BadgePlus } from "lucide-react";
import { House } from 'lucide-react';
import { LandPlot } from 'lucide-react';
import { ImagePlus } from 'lucide-react';
import { SquareKanban } from 'lucide-react';
import { CalendarFold } from 'lucide-react';
import { Users } from 'lucide-react';

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
    <div className="max-w-xs ml-3 mt-4 p-3 text-[12px]">
      <ul>
        <li className="flex items-center mb-5 gap-4 justify-start">
          {/* <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg> */}
          <BadgePlus size={25} color="orange" strokeWidth={2.5}/>
          <button onClick={handleCreatePost}>Create</button>
        </li>
        <li className="flex items-center mb-7 gap-4 justify-start">
        <House size={25} color="green" strokeWidth={2.5}/>
          <a href="#">Home</a>
        </li>
        <li className="flex items-center mb-7 gap-4 justify-start">
        <LandPlot size={25} color="gray" strokeWidth={2.5}/>
          <a href="#">Flag</a>
        </li>
        <li className="flex items-center mb-7 gap-4 justify-start">
        <ImagePlus size={25} color="purple" strokeWidth={2.5}/>
          <button onClick={() => setShowForm(true)} className=" rounded-lg">
            Create Travel Story
          </button>
        </li>
        <li className="flex items-center mb-7 gap-4 justify-start">
        <SquareKanban size={25} color="red" strokeWidth={2.5}/>
          <a href="#">Travel Plans</a>
        </li>
        <li className="flex items-center mb-7 gap-4 justify-start">
        <CalendarFold size={25} color="orange" strokeWidth={2.5}/>
          <a href="#">Events</a>
        </li>
        <li className="flex items-center mb-7 gap-4 justify-start">
        <Users size={25} color="gray" strokeWidth={2.5}/>
          <a href="#">Find Friends</a>
        </li>
      </ul>
      {showForm && <TravelPostForm onClose={() => setShowForm(false)} />}
      {showModal && <CreatePostModal onClose={handleCloseModal} />}
    </div>
  );
};

export default MenuCard;
