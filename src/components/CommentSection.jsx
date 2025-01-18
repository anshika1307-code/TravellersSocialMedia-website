import React, { useState } from 'react';
import commentsData from "../data/comments.json";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { ReplyAll } from 'lucide-react';
import { TextQuote } from 'lucide-react';

const CommentsSection = () => {
  const [visibleReplies, setVisibleReplies] = useState({});

  // Toggle the visibility of replies for a specific comment
  const toggleReplies = (commentId) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <div className="px-2 py-4 space-y-4">
      {commentsData.map((comment) => (
        <div
          key={comment.id}
          className="-mt-4 flex gap-2 items-start bg-gray-200 p-2 rounded-xl"
        >
          {/* Profile Image */}
          <IoPersonCircleSharp size={45} />
          {/* <img
            src={comment.profileImage}
            alt={comment.name}
            className="w-12 h-12 rounded-full object-cover"
          /> */}
          {/* Comment Details */}
          <div className='text-[12px]'>
            <h4 className="font-semibold text-gray-800">{comment.name}</h4>
            <p className="text-gray-800 text-[12px]">{comment.comment}</p>
            {/* Likes and Reply Button */}
            <div className="mt-1 text-gray-800 flex items-center gap-4">
              <span className='flex items-center gap-1'>{comment.likes}<AiFillLike size={14}/></span>
              {comment.replies.length > 0 && (
                <button
                  onClick={() => toggleReplies(comment.id)}
                  className="flex items-center gap-1"
                >
                 <span className='font-semibold'>{comment.replies.length}</span> <ReplyAll /> Reply 
                </button>
              )}
            </div>
            {/* Replies */}
            {visibleReplies[comment.id] && comment.replies.length > 0 && (
              <div className="mt-2 space-y-2">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="p-1 flex gap-1 items-start"
                  >
                    {/* <img
                      src={reply.profileImage}
                      alt={reply.name}
                      className="w-8 h-8 rounded-full object-cover"
                    /> */}
                    <IoPersonCircleSharp size={45} />
                    <div>
                      <h5 className="font-semibold text-gray-7-800">{reply.name}</h5>
                      <p className="text-gray-800">{reply.comment}</p>
                      <div className="mt-1 text-gray-800 flex items-center gap-1">{reply.likes}<AiFillLike size={14}/></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
