// import React from 'react'
// import Nav from '../../components/Timeline/nav'
// import ProfileCard from '../../components/Timeline/ProfileCard'
// import MenuCard from '../../components/Timeline/MenuCard'
// import PostCard from '../../components/Timeline/PostCard'

// function MainPage() {
//   return (
//     <div>
//         <Nav/>
        
//            <ProfileCard/>
//            <MenuCard/> 
//            <PostCard/>
        
//     </div>
//   )
// }

// export default MainPage

// import React from 'react';
// import Nav from '../../components/Timeline/nav';
// import ProfileCard from '../../components/Timeline/ProfileCard';
// import MenuCard from '../../components/Timeline/MenuCard';
// import PostCard from '../../components/Timeline/PostCard';

// function MainPage() {
//   return (
//     <div >
//       {/* Full-width Navigation */}
//       <Nav />
      
//       {/* Left Section */}
//       <div className='flex'>
//       <div className="fixed left-section">
//         <div >
//           <ProfileCard />
//           <MenuCard />
//         </div>
//       </div>
      
//       {/* Right Section */}
//       <div className="post-section">
//         <PostCard />
//       </div>
//       </div>
//     </div>
//   );
// }

// export default MainPage;



import React, { useState, useEffect } from 'react';
import Nav from '../../components/Timeline/nav';
import ProfileCard from '../../components/Timeline/ProfileCard';
import MenuCard from '../../components/Timeline/MenuCard';
import PostCard from '../../components/Timeline/PostCard';
import MessageList from '../../components/MessageBox/MessageList.jsx';
import WriteMessageCard from '../../components/MessageBox/WriteMessageCard.jsx';
import NotificationBox from '../../components/Notification/NotificationBox.jsx';

function MainPage() {
  const [postCards, setPostCards] = useState([]);
  const [isMessageListVisible, setIsMessageListVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [notificationTab, setNotificationTab] = useState(false);
  const toggleNotification = () => {
    setNotificationTab(!notificationTab);
  };
  const toggleMessageList = () => {
    setIsMessageListVisible(!isMessageListVisible);
  };
  const handleSelectMessage = (message) => {
    if (selectedMessage && selectedMessage.name === message.name) {
      setSelectedMessage(null); // Hide the WriteMessageCard if the same message is clicked again
    } else {
      setSelectedMessage(message); // Show the WriteMessageCard for the selected message
    }
  };
  // const newNoti = 5;
  const posts = [
    {
      id: 1,
      title: "John's Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      date: "May 5, 2024"
    },
    {
      id: 2,
      title: "Abir's Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Abir Ahmed",
      date: "May 6, 2024"
    },
    {
      id: 3,
      title: "Meera's Post",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024"
    },
    {
      id: 4,
      title: "Meera's Post",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024"
    },
    {
      id: 5,
      title: "Meera's Post",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024"
    },
    {
      id: 6,
      title: "Meera's Post",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024"
    },
    {
      id: 7,
      title: "Meera's Post",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024"
    }
  ];

  const messages = [
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Kiran Suresh",
      messageSnippet: "Sponsored Guar...",
      timestamp: "Jul 29",
      isUnread: true,
      isActive: true,
      conversation: [
        { sender: "Kiran Suresh", text: "Hello, how are you?" },
        { sender: "You", text: "I am good, thank you!" }
      ]
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Sharang Dhaimade",
      messageSnippet: "Sponsored Golden T...",
      timestamp: "Jul 22",
      isUnread: true,
      isActive: false,
      conversation: [
        { sender: "Sharang Dhaimade", text: "Can we discuss the project?" },
        { sender: "You", text: "Sure, let's schedule a meeting." }
      ]
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Jayesh Bhatia",
      messageSnippet: "Jayesh: Hello!",
      timestamp: "Jul 18",
      isUnread: false,
      isActive: true,
      conversation: [
        { sender: "Jayesh Bhatia", text: "Are you available for a call?" },
        { sender: "You", text: "Yes, I am free now." }
      ]
    },
    {
      profilePic: "https://via.placeholder.com/150",
      name: "Muskan Srivastava",
      messageSnippet: "Jayesh: Hello!",
      timestamp: "Jul 14",
      isUnread: true,
      isActive: true,
      conversation: [
        { sender: "Muskan Srivastava", text: "Are you available for a call?" },
        { sender: "You", text: "Yes, I am free now." },
        { sender: "Muskan Srivastava", text: "Are you available for a call?" },
        { sender: "You", text: "Yes, I am free now." },
        { sender: "Muskan Srivastava", text: "Are you available for a call?" },
        { sender: "You", text: "Yes, I am free now." }
      ]
    },
  ];
  const notification = [
    {
    //   profilePic: "https://via.placeholder.com/150",
      name: "Shryashi Chandra likes your post",
    //   messageSnippet: "Sponsored Land your dream role in Full-stack ...",
      timestamp: "Jul 14",
      isUnread: true
    },
    {
    //   profilePic: "https://via.placeholder.com/150",
      name: "Shreyashi Chandra comment on your post",
    //   messageSnippet: "Shreyashi: https://portfolio-woad-chi-95.vercel.app/",
      timestamp: "Jul 14",
      isUnread: false
    },
    {
    //   profilePic: "https://via.placeholder.com/150",
      name: "Ujjwal Roy send you follow request",
    //   messageSnippet: "I'm interested in your Full Stack Blockchain Developer role",
      timestamp: "Jul 14",
      isUnread: false
    }
  ];

  // Count unread messages
  const unreadCount = messages.filter(message => message.isUnread).length;
  const newNoti = notification.filter(notification => notification.isUnread).length;
  const closeMessageCard = () => {
    setSelectedMessage(null);
  };


  useEffect(() => {
    function handleScroll() {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      if (bottom) {
        // Load more post cards
        setPostCards(prevPostCards => [...prevPostCards, ...Array.from({ length: 3 }, (_, i) => prevPostCards.length + i + 1)]);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


 
  return (
    <div className='bg-slate-100'>
      {/* Full-width Navigation */}
      <Nav toggleMessageList={toggleMessageList} unreadCount={unreadCount} toggleNotification={toggleNotification} newNoti={newNoti}/>
      
      {/* Left Section */}
      <div className="flex">
        <div className="fixed bottom-0 w-64 overflow-y-auto z-50 hidden xl:block">
          <div>
            <ProfileCard />
            <MenuCard />
             
          </div>
        </div>
        
        {/* Right Section */}
        <div className="ml-0 xl:ml-64 w-full">
          <div className="w-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 60px)' }}>
            {posts.map(post => (
              <PostCard key={post.id} title={post.title} content={post.content} author={post.author} date={post.date} />
            ))}
          </div>
        </div>
        
        <div className="relative z-110 min-h-screen flex">
      {/* Other components or content can be added here */}
      {/* <MessageList /> */}
      {/* {isMessageListVisible && <MessageList messages={messages}/>} */}
      {isMessageListVisible && (
         <div className="flex flex-grow">
          <MessageList
            messages={messages}
            setSelectedMessage={handleSelectMessage}
          />
          {selectedMessage && (
            <WriteMessageCard message={selectedMessage} closeMessageCard={closeMessageCard}/>
          )}
        </div>
      )}
       </div>
       <div className='relative z-110 min-h-screen flex'>
        {notificationTab && (
          <NotificationBox notification={notification}/>
        )}
       </div>

       
      </div>
     
      
    </div>
  );
}

export default MainPage;
