import React, { useState } from "react";
import commentsData from "../data/comments.json";
import { IoPersonCircleSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { ReplyAll } from "lucide-react";

const CommentsSection = () => {
  const [comments, setComments] = useState(commentsData);
  const [visibleReplies, setVisibleReplies] = useState({});
  const [replyInputs, setReplyInputs] = useState({});
  const [newComment, setNewComment] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  const toggleReplies = (commentId) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const handleReplyChange = (commentId, value) => {
    setReplyInputs((prev) => ({
      ...prev,
      [commentId]: value,
    }));
  };

  const addReply = (commentId) => {
    const replyText = replyInputs[commentId]?.trim();
    if (!replyText) return;

    const newComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: `${comment.id}-reply-${comment.replies.length + 1}`,
              name: "You",
              comment: replyText,
              likes: 0,
            },
          ],
        };
      }
      return comment;
    });

    setComments(newComments);
    setReplyInputs((prev) => ({
      ...prev,
      [commentId]: "",
    }));
  };

  const addMainComment = () => {
    const trimmedComment = newComment.trim();
    if (!trimmedComment) return;

    const newCommentObj = {
      id: `comment-${comments.length + 1}`,
      name: "You",
      comment: trimmedComment,
      likes: 0,
      replies: [],
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
    setShowButtons(false);
  };

  return (
    <div className="px-2 py-4 space-y-4">
      {/* Input for adding a main comment */}
      <div className="flex items-start gap-2 mb-4">
        <IoPersonCircleSharp size={45} />
        <div className="flex-1">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onFocus={() => setShowButtons(true)}
            onBlur={(e) => !e.target.value.trim() && setShowButtons(false)}
            placeholder="Add a public comment..."
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          ></textarea>
          {showButtons && (
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={addMainComment}
                className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
              >
                Comment
              </button>
              <button
                onClick={() => {
                  setNewComment("");
                  setShowButtons(false);
                }}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md text-sm"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="-mt-4 flex gap-2 items-start bg-gray-200 p-2 rounded-xl"
        >
          {/* Profile Image */}
          <IoPersonCircleSharp size={45} />
          {/* Comment Details */}
          <div className="text-[12px]">
            <h4 className="font-semibold text-gray-800">{comment.name}</h4>
            <p className="text-gray-800 text-[12px]">{comment.comment}</p>

            {/* Likes and Reply Button */}
            <div className="mt-1 text-gray-800 flex items-center gap-4">
              <span className="flex items-center gap-1">
                {comment.likes}
                <AiFillLike size={14} />
              </span>
              <button
                onClick={() => toggleReplies(comment.id)}
                className="flex items-center gap-1"
              >
                <span className="font-semibold">{comment.replies.length}</span>
                <ReplyAll /> {comment.replies.length > 1 ? "Replies" : "Reply"}
              </button>
            </div>

            {/* Replies */}
            {visibleReplies[comment.id] && (
              <div className="mt-2 space-y-2">
                {/* Reply Input */}
                <div className="flex items-start gap-2 mb-2">
                  <IoPersonCircleSharp size={30} />
                  <div className="flex-1">
                    <textarea
                      value={replyInputs[comment.id] || ""}
                      onChange={(e) =>
                        handleReplyChange(comment.id, e.target.value)
                      }
                      placeholder="Write a reply..."
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    ></textarea>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => addReply(comment.id)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                      >
                        Reply
                      </button>
                      <button
                        onClick={() =>
                          setReplyInputs((prev) => ({
                            ...prev,
                            [comment.id]: "",
                          }))
                        }
                        className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="p-1 flex gap-1 items-start bg-gray-100 rounded-md"
                  >
                    <IoPersonCircleSharp size={30} />
                    <div>
                      <h5 className="font-semibold text-gray-800">
                        {reply.name}
                      </h5>
                      <p className="text-gray-800">{reply.comment}</p>
                      <div className="mt-1 text-gray-800 flex items-center gap-1">
                        {reply.likes}
                        <AiFillLike size={14} />
                      </div>
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
