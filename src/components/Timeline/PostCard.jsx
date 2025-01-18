import React, { useState } from "react";
import DairySpiralImage from "../../images/spiral.png";
import DairySpiralImage2 from "../../images/spiral-hori.png";
import Postimage from "../../images/1.jpg";
import Postvideo from "../../images/2.mp4";
import Postimage2 from "../../images/3.jpg";
import Postimage3 from "../../images/4.jpg";
import topL1 from "../../images/topL1.png";
import experience from "../../assets/experience.png";
import cost from "../../assets/cost.png";
import location from "../../assets/location.png";
import message from "../../assets/message.png";
import more from "../../assets/more.png";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";
import share from "../../assets/share.png";
import avatar from "../../assets/avatar.webp";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";

import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";
import { Star } from "lucide-react";
import CommentsSection from "../CommentSection";


const PostCard = ({ post }) => {
  const [selectedButton, setSelectedButton] = useState("Post");
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const [liked, setLiked] = useState(false);
  const token = useSelector((state) => state.authReducer.authData?.token);
  console.log("post id", post._id);
  console.log("post id in num", Number(post._id));
  const handlelike = async () => {
    try {
      // Send PATCH request to like or unlike the post
      const response = await fetch(
        `http://localhost:5000/posts/${post._id}/like`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("res", response.json());
      // const response = await axios.patch(`/api/posts/${postId}/like`, {}, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
      //   },
      // });

      // Toggle the like state
      setLiked((prevLiked) => !prevLiked);
      // alert(response.data.message); // Show success message from the backend
    } catch (error) {
      console.error("Error liking post:", error);
      alert("An error occurred while liking the post");
    }
  };
  const [rating, setRating] = useState(4);
  const percentage = ((rating - 1) / 4) * 100;
  const getEmoji = (rating) => {
    switch (rating) {
      case 1:
        return "😟"; // Sad
      case 2:
        return "😕"; // Slightly Sad
      case 3:
        return "😐"; // Neutral
      case 4:
        return "😊"; // Happy
      case 5:
        return "😁"; // Very Happy
      default:
        return "😐";
    }
  };
  // const images = [
  //   Postimage,
  //   Postimage2,
  //   Postimage3,
  //   topL1,

  // ];
  const media = [
    { type: "image", src: Postimage },
    { type: "image", src: Postimage2 },
    { type: "video", src: Postvideo },
    { type: "image", src: Postimage3 },
    { type: "image", src: topL1 },
  ];
  console.log("post data", post);
  return (
    <div className="flex-1 h-full mt-4 mb-4 flex flex-row">
      {/* Sidebar */}
      <div className="lg:hidden w-1/6 p-4 border-r border-gray-300">
        {/* Sidebar content */}
        <div className="sticky top-4">
          {/* <h2 className="text-lg font-semibold mb-4">Sidebar</h2> */}
          <img
            className="w-11 mx-2 rounded-full mb-5"
            src={avatar}
            alt="Home"
          />
          <ul>
            <li className="mb-2">
              <a href="#">
                <img src={like} className="m-1 w-11" alt="" />2
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <img src={comment} className="m-1 w-9" alt="" />5
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <img src={share} className="m-1 w-9" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-full mb-8 ml-3 relative w-5/6 lg:w-full">
        <div className="lg:flex lg:items-stretch w-full">
          {/* Picture Preview Section */}

          <div className="w-full lg:w-1/2 mt-2 border border-gray-300 rounded-2xl shadow-lg overflow-hidden relative">
            {post?.media?.length > 0 ? (
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
              >
                {post.media.map((url, index) => (
                  <div
                    key={index}
                    className="relative w-full"
                    style={{ paddingTop: "100%" }}
                  >
                    {url.endsWith(".mp4") ||
                    url.endsWith(".webm") ||
                    url.endsWith(".ogg") ? ( // Check if the URL is a video
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        controls
                      >
                        <source src={url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={url}
                        alt={`Slide ${index}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </Carousel>
            ) : (
              <p className="text-center py-4">No media available</p>
            )}
          </div>

          {/* Spiral */}
          {/* <img src={DairySpiralImage} alt="Dairy Spiral" className="absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-16 lg:h-full top-0 left-1/2 transform -translate-x-1/2 w-full h-16 rotate-90 lg:rotate-0" /> */}
          <img
            src={DairySpiralImage}
            alt="Dairy Spiral"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-full hidden lg:block opacity-60"
          />
          {/* <img src={DairySpiralImage2} alt="Dairy Spiral" className="absolute top-96 left-1/2 transform -translate-x-1/2 w-full h-16 lg:hidden" /> */}
          {/* Post Details Section */}
          <div className="w-full lg:w-[47%] shadow-lg bg-white/60 rounded-xl mt-2 border-2">
            {/* Post Caption */}

            <div className="flex justify-between px-4 py-2 shadow-md mb-3 -ml-2">
              <div className="ml-4 flex justify-start items-center align-items-center gap-2">
                <IoPersonCircleSharp size={45} />
                <div>
                  <p className="text-[18px]">{post.user.username}</p>
                  <p className="text-[9px]">2 hours ago</p>
                </div>
              </div>
              <h2 className="text-[18px] font-semibold pr-1">
                {post.mainLocation}
              </h2>
            </div>
            <div className="flex p-2 gap-2 lg:pl-7 flex-wrap">
              <button
                className={`rounded-lg bg-pink-200 border-2 border-gray-300 text-gray-600 text-[10px] items-center h-10 px-2  flex ${
                  selectedButton === "Experience"
                    ? "bg-white border border-gray-400"
                    : ""
                }`}
                onClick={() => handleButtonClick("Experience")}
              >
                <div className="m-1">
                  <BsFillPersonVcardFill size={18} />
                </div>
                Experience
              </button>

              <button
                className={`rounded-lg bg-blue-200 border-2 border-gray-300 text-gray-600 px-2 py-1 text-[10px] h-10 items-center flex ${
                  selectedButton === "Places"
                    ? "bg-white border border-gray-400"
                    : ""
                }`}
                onClick={() => handleButtonClick("Places")}
              >
                <div className="m-1">
                  <FaMapLocationDot size={18} />
                </div>
                Places
              </button>
              <button
                className={`rounded-lg bg-green-200 border-2 border-gray-300 text-gray-600 px-2 py-1 text-[10px] h-10 items-center flex ${
                  selectedButton === "Expenses"
                    ? "bg-white border border-gray-400"
                    : ""
                }`}
                onClick={() => handleButtonClick("Expenses")}
              >
                <div className="m-1">
                  <FaCircleDollarToSlot size={18} />
                </div>
                Expenses
              </button>
              <button
                className={`rounded-lg bg-orange-200 border-2 border-gray-300 text-gray-600 px-2 py-1 text-[10px] h-10 items-center flex ${
                  selectedButton === "Food/Stay"
                    ? "bg-white border border-gray-400"
                    : ""
                }`}
                onClick={() => handleButtonClick("Food/Stay")}
              >
                <div className="m-1">
                  <MdFoodBank size={20} />
                </div>
                Food/Stay
              </button>
              <button
                className={`rounded-lg bg-red-200 border-2 border-gray-300 text-gray-600 px-2 py-1 flex text-[10px] h-10 items-center ${
                  selectedButton === "Recommendation"
                    ? "bg-white border border-gray-400"
                    : ""
                }`}
                onClick={() => handleButtonClick("Recommendation")}
              >
                <div className="m-1">
                  <AiFillLike size={20} />
                </div>
                Recommendation
              </button>
            </div>

            <div className="mx-4 ml-7 px-3 mt-3 border-2 py-3 rounded-xl rounded-b-none h-[26vw]">
              <div className="flex items-center mb-[12px] text-[13px]">
                {/* //Experience */}
                {selectedButton === "Experience" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h1 className="text-[16px]">Overall Experience</h1>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mr-3">
                        <Star size={20} />
                        <span className="font-bold">4.3</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <p className="">{post.caption}</p>
                  </div>
                )}

                {/* Places */}
                {selectedButton === "Places" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h1 className="text-[16px]">Places</h1>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mr-3">
                        <Star size={20} />
                        <span className="font-bold">4.3</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <p className="">{post.caption}</p>
                  </div>
                )}

                {/* Expenses */}
                {selectedButton === "Expenses" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h1 className="text-[16px]">Expenses</h1>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mr-3">
                        <Star size={20} />
                        <span className="font-bold">4.3</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <p className="">{post.caption}</p>
                  </div>
                )}

                {/* Food/stay  */}
                {selectedButton === "Food/Stay" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h1 className="text-[16px]">Food/Stay</h1>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mr-3">
                        <Star size={20} />
                        <span className="font-bold">4.3</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <p className="">{post.caption}</p>
                  </div>
                )}

                {/* Recommendation  */}
                {selectedButton === "Recommendation" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h1 className="text-[16px]">Recommendation</h1>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Duration - 4 Days
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mr-3">
                        <Star size={20} />
                        <span className="font-bold">4.3</span>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <p className="">{post.caption}</p>
                  </div>
                )}

                {selectedButton === "Comments" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <h1 className="text-[16px]">Comments</h1>
                        <p className="bg-gray-300 px-3 py-2 rounded-xl text-[9px]">
                          Newer
                        </p>
                      </div>
                      <div className="flex items-center gap-1 mr-3">
                      <span className="font-bold">4.3</span>
                        <MessageCircle size={20} />
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="max-h-[29vh] xl:max-h-[42vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                      <CommentsSection />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="ml-7 border-t-0 border-2 mr-4 rounded-xl rounded-t-none z-10">
              {/* Like, Comment, Share Icons */}
              <div className="flex py-2 justify-between items-center px-5 mt-auto z-10">
                <button className="flex items-center justify-center align-items-center mr-4 text-gray-600 gap-2">
                  <Heart size={28} />
                  <div className="flex flex-col items-center">
                    <span className=" text-[16px] font-bold">150</span>
                    <span className=" text-[10px]">Likes</span>
                  </div>
                </button>
                <button
                  className="flex items-center mr-4 text-gray-600 gap-2"
                  onClick={() => handleButtonClick("Comments")}
                >
                  <MessageCircle size={28} />
                  <div className="flex flex-col items-center">
                    <span className=" text-[16px] font-bold">90</span>
                    <span className=" text-[10px]">comments</span>
                  </div>
                </button>
                <button className="flex items-center text-gray-600 gap-2">
                  <Share size={28} />
                  <div className="flex flex-col items-center">
                    <span className=" text-[16px] font-bold">30</span>
                    <span className=" text-[10px]">Shares</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
