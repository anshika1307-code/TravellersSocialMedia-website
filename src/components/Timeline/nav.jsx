


import React from 'react';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.webp';
import noti from '../../assets/noti.png';
import messageBox from '../../assets/messageBox.png';
const Nav = ({ toggleMessageList, unreadCount, toggleNotification, newNoti }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 rounded-b-xl shadow-xl ">
         {/* Hamburger icon for small screens */}
      <div className="block lg:hidden">
      <button className="text-white hover:text-gray-300 focus:outline-none">
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
          />
        </svg>
      </button>
    </div>
       <div className="flex items-center flex-shrink-0 text-white mr-6">
         {/* Logo */}
         <img
            className="w-36"
            src={logo}
            alt="Home"
          />
         {/* <span className="font-semibold text-xl tracking-tight">Logo</span> */}
       </div>
       <div className="hidden lg:flex lg:justify-center lg:flex-1 lg:mr-32">
         {/* Search input */}
         <input
          className="bg-gray-800 text-gray-50 rounded-md py-2 px-9 text-center focus:outline-none focus:bg-gray-700 w-full lg:w-auto rounded-2xl h-12"
          type="text"
          placeholder="Whats in your mind?"
        />
      </div>
      <div className="flex items-center">
        {/* Message icon */}
        <button className="text-white hover:text-gray-300 mr-2 focus:outline-none relative" onClick={toggleMessageList}>
          
          <img
                    className="w-8 lg:w-11"
                    src={messageBox}
                    alt="messageBox"
                  />
                  {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
        </button>
        {/* Notification icon */}
        <button className="text-white hover:text-gray-300 focus:outline-none relative" onClick={toggleNotification}>
          
          <img
                    className="w-8 lg:w-11"
                    src={noti}
                    alt="noti"
                  />
            {newNoti > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {newNoti}
            </span>
          )}
        </button>
        {/* Profile icon */}
        <a href="#" className="text-white hover:text-gray-300">
          <img
            className="w-8 lg:w-11 mx-2 rounded-full"
            src={avatar}
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

