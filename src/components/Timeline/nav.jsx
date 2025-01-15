


import React from 'react';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.webp';
import noti from '../../assets/noti.png';
import messageBox from '../../assets/messageBox.png';
import { useDispatch, useSelector } from 'react-redux';
import { MessageCircleMore } from 'lucide-react'
import { Bell } from 'lucide-react';

const Nav = ({ toggleMessageList, unreadCount, toggleNotification, newNoti }) => {
 
  const user = useSelector((state) => state.authReducer.authData?.user);
  return (
    <nav className="flex items-center flex-wrap bg-[#F2F0E3] py-3 px-[25px] border-b-2 border-gray-300">
      {/* Hamburger icon for small screens */}
      <div className="block lg:hidden">
        <button className="text-white hover:text-gray-300 focus:outline-none">
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* Logo */}
        <img className="w-[100px]" src={logo} alt="Home" />
        {/* <span className="font-semibold text-xl tracking-tight">Logo</span> */}
      </div>
      <div className="hidden lg:flex lg:justify-center lg:flex-1">
        {/* Search input */}
        <input
          className="bg-transparent border-2 border-gray-600 text-gray-400 h-9 px-3 text-center text-sm focus:outline-none focus:bg-gray-300 w-full lg:w-auto rounded-full"
          type="text"
          placeholder="Whats in your mind?"
        />
      </div>
      <div className="flex items-center">
        {/* Message icon */}
        <button
          className="text-white hover:text-gray-300 mr-2 focus:outline-none relative"
          onClick={toggleMessageList}
        >
          <div className='bg-[#212021] p-2 rounded-full'>
          <MessageCircleMore />
          </div>
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-[10px] font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
        </button>
        {/* Notification icon */}
        <button
          className="text-white hover:text-gray-300 focus:outline-none relative"
          onClick={toggleNotification}
        >
          <div className='bg-[#212021] p-2 rounded-full'>
          <Bell />
          </div>
          {newNoti > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-[10px] font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {newNoti}
            </span>
          )}
        </button>
        {/* Profile icon */}
        <a href="#" className="text-white hover:text-gray-300">
          <img
            className="w-8 h-8 lg:h-10 lg:w-10 mx-2 rounded-full"
            src={user?.profilePic || 'https://via.placeholder.com/150'}
            alt="Home"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
//       {/* Hamburger icon for small screens */}
//       <div className="block lg:hidden">
//         <button className="text-white hover:text-gray-300 focus:outline-none">
//           <svg
//             className="h-6 w-6 fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fillRule="evenodd"
//               d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
//             />
//           </svg>
//         </button>
//       </div>
//       {/* Logo */}
//       <div className="flex items-center flex-shrink-0 text-white mr-6">
//         <span className="font-semibold text-xl tracking-tight">Logo</span>
//       </div>
//       {/* Message, Notification, and Profile icons */}
//       <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 lg:mr-32">
//         <a href="#" className="text-white hover:text-gray-300 mr-4">
//           Messages
//         </a>
//         <a href="#" className="text-white hover:text-gray-300 mr-4">
//           Notifications
//         </a>
//         <a href="#" className="text-white hover:text-gray-300">
//           Profile
//         </a>
//       </div>
//       {/* Hamburger icon for larger screens */}
//       <div className="hidden lg:block">
//         {/* Adjust as needed */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
