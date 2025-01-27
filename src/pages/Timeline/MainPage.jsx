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

import React, { useState, useEffect } from "react";
import Nav from "../../components/Timeline/nav";
import ProfileCard from "../../components/Timeline/ProfileCard";
import MenuCard from "../../components/Timeline/MenuCard";
import PostCard from "../../components/Timeline/PostCard";
import MessageList from "../../components/MessageBox/MessageList.jsx";
import WriteMessageCard from "../../components/MessageBox/WriteMessageCard.jsx";
import NotificationBox from "../../components/Notification/NotificationBox.jsx";
import { useDispatch, useSelector } from "react-redux";
function MainPage() {
  const [postCards, setPostCards] = useState([]);
  const [isMessageListVisible, setIsMessageListVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [notificationTab, setNotificationTab] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.authData?.token);
  console.log("Token:", token);
  const [postsbackend, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("token", token);
        const response = await fetch("http://localhost:5000/posts/timeline", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log("data", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

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
      date: "May 5, 2024",
    },
    {
      id: 2,
      title: "Abir's Post",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Abir Ahmed",
      date: "May 6, 2024",
    },
    {
      id: 3,
      title: "Meera's Post",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024",
    },
    {
      id: 4,
      title: "Meera's Post",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024",
    },
    {
      id: 5,
      title: "Meera's Post",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024",
    },
    {
      id: 6,
      title: "Meera's Post",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024",
    },
    {
      id: 7,
      title: "Meera's Post",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Meera Khan",
      date: "May 7, 2024",
    },
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
        { sender: "You", text: "I am good, thank you!" },
      ],
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
        { sender: "You", text: "Sure, let's schedule a meeting." },
      ],
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
        { sender: "You", text: "Yes, I am free now." },
      ],
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
        { sender: "You", text: "Yes, I am free now." },
      ],
    },
  ];
  const notification = [
    {
      //   profilePic: "https://via.placeholder.com/150",
      name: "Shryashi Chandra likes your post",
      //   messageSnippet: "Sponsored Land your dream role in Full-stack ...",
      timestamp: "Jul 14",
      isUnread: true,
    },
    {
      //   profilePic: "https://via.placeholder.com/150",
      name: "Shreyashi Chandra comment on your post",
      //   messageSnippet: "Shreyashi: https://portfolio-woad-chi-95.vercel.app/",
      timestamp: "Jul 14",
      isUnread: false,
    },
    {
      //   profilePic: "https://via.placeholder.com/150",
      name: "Ujjwal Roy send you follow request",
      //   messageSnippet: "I'm interested in your Full Stack Blockchain Developer role",
      timestamp: "Jul 14",
      isUnread: false,
    },
  ];

  // Count unread messages
  const unreadCount = messages.filter((message) => message.isUnread).length;
  const newNoti = notification.filter(
    (notification) => notification.isUnread
  ).length;
  const closeMessageCard = () => {
    setSelectedMessage(null);
  };

  useEffect(() => {
    function handleScroll() {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        // Load more post cards
        setPostCards((prevPostCards) => [
          ...prevPostCards,
          ...Array.from({ length: 3 }, (_, i) => prevPostCards.length + i + 1),
        ]);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F2F0E3]">
      {/* Full-width Navigation */}
      <Nav
        toggleMessageList={toggleMessageList}
        unreadCount={unreadCount}
        toggleNotification={toggleNotification}
        newNoti={newNoti}
      />

      {/* Left Section */}
      <div className="flex overflow-hidden">
        <div className="w-[18%] hidden z-50 xl:block mx-4">
          <div className=" ">
            <ProfileCard />
          </div>
          <div className="mt-[55px]">
            <MenuCard />
          </div>
        </div>

        <div className="ml-0 w-full">
          <div
            className="w-full overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 60px)" }}
          >
            {isMessageListVisible ? (
              <div className="flex h-screen w-full">
                {/* Left side - WriteMessageCard */}
                <div className="w-2/3">
                  {selectedMessage ? (
                    <WriteMessageCard
                      message={selectedMessage}
                      closeMessageCard={() => setSelectedMessage(null)}
                    />
                  ) : (
                    <div className=" flex flex-col h-[50%] w-full  justify-center text-center text-gray-600">
                      <h2 className="text-xl font-semibold">Your Messages</h2>
                      <p className="mt-2">
                        Send private photos and messages to a friend or group.
                      </p>
                    </div>
                  )}
                </div>

                {/* Right side - MessageList */}
                <div className="w-1/3">
                  <MessageList
                    messages={messages}
                    setSelectedMessage={handleSelectMessage}
                  />
                </div>
              </div>
            ) : // <div className="flex flex-grow">
            //   <MessageList messages={messages} setSelectedMessage={handleSelectMessage} />
            //   {selectedMessage && <WriteMessageCard message={selectedMessage} closeMessageCard={closeMessageCard} />}
            // </div>
            postsbackend.length > 0 ? (
              postsbackend.map((post) => (
                <PostCard key={post._id} post={post} />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No posts to display
              </p>
            )}
          </div>
        </div>

        <div className="relative z-110 min-h-screen flex">
          {/* Other components or content can be added here */}
          {/* <MessageList /> */}
          {/* {isMessageListVisible && <MessageList messages={messages}/>} */}
          {/* {isMessageListVisible && (
            <div className="flex flex-grow">
              <MessageList
                messages={messages}
                setSelectedMessage={handleSelectMessage}
              />
              {selectedMessage && (
                <WriteMessageCard
                  message={selectedMessage}
                  closeMessageCard={closeMessageCard}
                />
              )}
            </div>
          )} */}
        </div>
        <div className="relative z-110 min-h-screen flex">
          {notificationTab && <NotificationBox notification={notification} />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
