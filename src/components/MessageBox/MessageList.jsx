// // import React from 'react';
// // import MessageItem from './MessageItem';
// // import Header from './Header';
// // import SearchBar from './SearchBar';

// // const messages = [
// //   {
// //     profilePic: "https://via.placeholder.com/150",
// //     name: "Kiran Suresh",
// //     messageSnippet: "Sponsored Guaranteed placement in a top Full...",
// //     timestamp: "Jul 29",
// //     isUnread: true
// //   },
// //   {
// //     profilePic: "https://via.placeholder.com/150",
// //     name: "Sharang Dhaimade",
// //     messageSnippet: "Sponsored Golden Ticket to Top US & Canadian B...",
// //     timestamp: "Jul 22",
// //     isUnread: true
// //   },
// //   {
// //     profilePic: "https://via.placeholder.com/150",
// //     name: "Jayesh Bhatia",
// //     messageSnippet: "Jayesh: Hello!",
// //     timestamp: "Jul 18",
// //     isUnread: false
// //   },
// //   {
// //     profilePic: "https://via.placeholder.com/150",
// //     name: "Muskan Srivastava",
// //     messageSnippet: "Seeking an internship opportunity for the...",
// //     timestamp: "Jul 14",
// //     isUnread: true
// //   },
// //   // Add more messages as needed
// // ];

// // const MessageList = () => {
// //   return (
// //     <div className="fixed bottom-0 right-0 m-4 w-full max-w-md">
// //       <div className="bg-gray-200 rounded-lg overflow-hidden flex flex-col shadow-md h-full">
// //         <Header />
// //         <SearchBar />
// //         <div className="flex-grow h-80 overflow-y-scroll">
// //           {messages.map((message, index) => (
// //             <MessageItem
// //               key={index}
// //               profilePic={message.profilePic}
// //               name={message.name}
// //               messageSnippet={message.messageSnippet}
// //               timestamp={message.timestamp}
// //               isUnread={message.isUnread}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MessageList;


// import React from 'react';
// import MessageItem from './MessageItem';
// import Header from './Header';
// import SearchBar from './SearchBar';

// const messages = [
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "Kiran Suresh",
//     messageSnippet: "Sponsored Guaranteed placement in a top Full...",
//     timestamp: "Jul 29",
//     isUnread: true
//   },
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "Sharang Dhaimade",
//     messageSnippet: "Sponsored Golden Ticket to Top US & Canadian B...",
//     timestamp: "Jul 22",
//     isUnread: true
//   },
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "Jayesh Bhatia",
//     messageSnippet: "Jayesh: Hello!",
//     timestamp: "Jul 18",
//     isUnread: false
//   },
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "Muskan Srivastava",
//     messageSnippet: "Seeking an internship opportunity for the...",
//     timestamp: "Jul 14",
//     isUnread: true
//   },
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "RAUNAK BARANWAL",
//     messageSnippet: "Sponsored Land your dream role in Full-stack ...",
//     timestamp: "Jul 14",
//     isUnread: true
//   },
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "Shreyashi Chandra",
//     messageSnippet: "Shreyashi: https://portfolio-woad-chi-95.vercel.app/",
//     timestamp: "Jul 14",
//     isUnread: false
//   },
//   {
//     profilePic: "https://via.placeholder.com/150",
//     name: "Ujjwal Roy",
//     messageSnippet: "I'm interested in your Full Stack Blockchain Developer role",
//     timestamp: "Jul 14",
//     isUnread: false
//   }
// ];

// const MessageList = () => {
//   return (
//     <div className="fixed bottom-0 right-0 m-4 w-full max-w-md">
//       <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col">
//         <Header />
//         <SearchBar />
//         <div className="flex-grow h-64 overflow-y-auto overflow-x-hidden">
//           {messages.map((message, index) => (
//             <MessageItem
//               key={index}
//               profilePic={message.profilePic}
//               name={message.name}
//               messageSnippet={message.messageSnippet}
//               timestamp={message.timestamp}
//               isUnread={message.isUnread}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MessageList;


import React, { useState } from 'react';
import MessageItem from './MessageItem';
import Header from './Header';
import SearchBar from './SearchBar';



const MessageList = ({ messages, setSelectedMessage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-md h-screen -ml-2">
    <div className="bg-[#fff8f8] overflow-hidden shadow-md flex flex-col h-full rounded-xl">
      <Header isExpanded={isExpanded} toggleExpand={toggleExpand} />
      <SearchBar />
      <div className="flex-grow overflow-y-auto overflow-x-hidden transition-height duration-300">
        {messages.map((message, index) => (
          <div key={index} onClick={() => setSelectedMessage(message)}>
            <MessageItem
              key={index}
              profilePic={message.profilePic}
              name={message.name}
              messageSnippet={message.messageSnippet}
              timestamp={message.timestamp}
              isUnread={message.isUnread}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default MessageList;
