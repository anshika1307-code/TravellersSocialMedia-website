// import React from 'react';
// import { FaSearch, FaCog, FaEdit } from 'react-icons/fa';

// const Header = () => {
//   return (
//     <div className="flex items-center justify-between p-4 bg-white shadow">
//       <div className="flex items-center">
//         <img
//           className="w-10 h-10 rounded-full"
//           src="https://via.placeholder.com/150"
//           alt="User Profile"
//         />
//         <h1 className="ml-4 text-xl font-semibold">Messaging</h1>
//       </div>
//       <div className="flex items-center space-x-4">
//         <FaSearch className="text-gray-600 cursor-pointer" />
//         <FaCog className="text-gray-600 cursor-pointer" />
//         <FaEdit className="text-gray-600 cursor-pointer" />
//       </div>
//     </div>
//   );
// };

// export default Header;



import React from 'react';
import { FaSearch, FaCog, FaEdit, FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Header = ({ isExpanded, toggleExpand }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://via.placeholder.com/150"
          alt="User Profile"
        />
        <h1 className="ml-4 text-xl font-semibold">Messaging</h1>
      </div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 cursor-pointer" />
        <FaCog className="text-gray-600 cursor-pointer" />
        <FaEdit className="text-gray-600 cursor-pointer" />
        <div onClick={toggleExpand} className="cursor-pointer">
          {isExpanded ? <FaArrowUp className="text-gray-600" /> : <FaArrowDown className="text-gray-600" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
