import React, { useState } from 'react';
import NotificationItem from './NotificationItem';
import Header from './Header';
import SearchBar from './SearchBar';



const NotificationBox = ({notification}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 w-96 max-w-md">
      <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col">
        <Header isExpanded={isExpanded} toggleExpand={toggleExpand} />
        <SearchBar />
        <div className={`flex-grow ${isExpanded ? 'h-96' : 'h-64'} overflow-y-auto overflow-x-hidden transition-height duration-300`}>
          {notification.map((notification, index) => (
            <div key={index}>
            <NotificationItem
              key={index}
              name={notification.name}
            //   messageSnippet={notification.messageSnippet}
              timestamp={notification.timestamp}
              isUnread={notification.isUnread}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;