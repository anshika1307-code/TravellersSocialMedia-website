// import React from 'react';

// const WriteMessageCard = ({ message }) => {
//   return (
//     <div className="fixed bottom-0 right-7 mr-96 m-4 w-full max-w-md bg-white shadow-md rounded-lg p-4 flex flex-col h-96">
//       <div className="flex items-center mb-4">
//         <img
//           className="w-10 h-10 rounded-full"
//           src={message.profilePic}
//           alt={`${message.name}'s profile`}
//         />
//         <div className="ml-4">
//           <h4 className="font-semibold text-gray-900">{message.name}</h4>
//           <p className="text-sm text-gray-500">
//             {message.isActive ? "Active" : "Inactive"}
//           </p>
//         </div>
//       </div>
//       <div className="flex-grow overflow-y-scroll mb-4">
//         {message.conversation.map((msg, index) => (
//           <div key={index} className="mb-2">
//             <p className={`font-bold ${msg.sender === 'You' ? 'text-right' : ''}`}>{msg.sender}:</p>
//             <p className={`bg-gray-100 p-2 rounded-lg ${msg.sender === 'You' ? 'text-right bg-blue-100' : ''}`}>{msg.text}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default WriteMessageCard;


import React from 'react';
import { FaExpand, FaEllipsisV, FaTimes } from 'react-icons/fa';

const WriteMessageCard = ({ message, closeMessageCard }) => {
  return (
    // <div className="relative m-4 w-full max-w-md bg-white shadow-md rounded-lg p-4 flex flex-col">
    <div className="fixed bottom-0 right-7 lg:mr-96 m-4 w-full max-w-md bg-white shadow-md rounded-lg p-4 flex flex-col h-96">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={message.profilePic}
            alt={`${message.name}'s profile`}
          />
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{message.name}</h4>
            <p className="text-sm text-gray-500">
              {message.isActive ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaExpand className="text-gray-600 cursor-pointer" />
          <FaEllipsisV className="text-gray-600 cursor-pointer" />
          <FaTimes className="text-gray-600 cursor-pointer" onClick={closeMessageCard} />
        </div>
      </div>
      <hr/>
      <div className="flex-grow overflow-y-auto mb-4">
        {message.conversation.map((msg, index) => (
          <div key={index} className="mb-2">
            <p className={`font-bold ${msg.sender === 'You' ? 'text-right' : ''}`}>{msg.sender}:</p>
            <p className={`bg-gray-100 p-2 rounded-lg ${msg.sender === 'You' ? 'text-right bg-blue-100' : ''}`}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default WriteMessageCard;
