import React from 'react';

const NotificationItem = ({ name, timestamp, isUnread }) => {
  return (
    <div className={`flex items-center p-4 bg-white hover:bg-gray-100 ${isUnread ? 'bg-blue-50' : ''} cursor-pointer`}>
      {/* <img
        className="w-10 h-10 rounded-full"
        src={profilePic}
        alt={`${name}'s profile`}
      /> */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        {/* <p className="text-sm text-gray-700 mt-1 truncate">{messageSnippet}</p> */}
      </div>
      {isUnread && <div className="ml-4 bg-blue-500 w-3 h-3 rounded-full"></div>}
    </div>
  );
};

export default NotificationItem;
