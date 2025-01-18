
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/AuthAction';

const ProfileCard = () => {
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState();
  const user = useSelector((state) => state.authReducer.authData?.user);
  const token = useSelector((state) => state.authReducer.authData?.token);

  console.log("user in profile card", user);
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  useEffect(() => {
    fetchUserData();
  },[user, token]);
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/profile/${user.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Use the token from Redux store
        },
        
      });

      if (response.ok) {
        const result = await response.json();
        console.log("user data fetched:", result);
        setUserdata(result);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

return (
  <div className="max-w-xs ml-2 mt-3">
    <div className="relative rounded-lg shadow-md border border-[#9A9494] top-11">
      {/* Avatar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-5">
        <img
          className="rounded-full w-24 h-24"
          src={user?.profilePic || 'https://via.placeholder.com/150'}
          alt="Avatar"
        />
      </div>
      {/* Details */}
      <div className="px-6 py-4 pt-9 border-b border-gray-300">
        {/* Name */}
        <div className="font-bold text-xl mb-2 text-center mt-5">
          {user?.username || 'Username'}
        </div>
        {/* Horizontal line */}
        <div className="border-t border-gray-300"></div>
        {/* Post count, followers, following */}
        <div className="flex justify-between text-[22px] font-semibold pl-4 pr-4">
          <span>{user?.posts || 0}</span>
          <span>{userdata?.followersCount || 0}</span>
          <span>{userdata?.followingCount || 0}</span>
        </div>
        <div className="flex justify-between text-[10px] mb-2 pl-2 pr-2">
          <span>Posts</span>
          <span>Followers</span>
          <span>Following</span>
        </div>

        {/* Bio */}
        <p className="flex justify-center text-[13px] opacity-70 mt-5">
          {user?.bio || 'Add a bio to your profile.'}
        </p>
      </div>
    </div>
  </div>
);
};

export default ProfileCard;
