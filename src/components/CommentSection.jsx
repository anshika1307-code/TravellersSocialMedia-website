import React from 'react';
import commentsData from "../data/comments.json"
import { IoPersonCircleSharp } from "react-icons/io5";

const CommentsSection = () => {
  return (
    <div className="p-4 space-y-4">
      {commentsData.map((comment) => (
        <div
          key={comment.id}
          className="bg-white rounded-lg shadow-md p-4 flex gap-4 items-start"
        >
          {/* Profile Image */}
          <IoPersonCircleSharp size={45} />
          {/* <img
            src={comment.profileImage}
            alt={comment.name}
            className="w-12 h-12 rounded-full object-cover"
          /> */}
          {/* Comment Details */}
          <div>
            <h4 className="font-semibold text-gray-800">{comment.name}</h4>
            <p className="text-gray-600 text-sm">{comment.comment}</p>
            {/* Likes */}
            <div className="mt-2 text-sm text-gray-500">👍 {comment.likes} likes</div>
            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 space-y-2">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="p-2 flex gap-2 items-start"
                  >
                    {/* <img
                      src={reply.profileImage}
                      alt={reply.name}
                      className="w-8 h-8 rounded-full object-cover"
                    /> */}
                     <IoPersonCircleSharp size={45} />
                    <div>
                      <h5 className="font-semibold text-gray-700">{reply.name}</h5>
                      <p className="text-gray-600 text-sm">{reply.comment}</p>
                      <div className="mt-1 text-sm text-gray-500">👍 {reply.likes} likes</div>
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
