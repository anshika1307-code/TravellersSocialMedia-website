// // import React from 'react';

// // const ProfileCard = () => {
// //   return (
// //     <div className="max-w-sm ml-3 mt-9 pt-9">
      
// //       <div className="relative rounded-t shadow-lg">
// //         {/* <img
// //           className="w-full h-auto rounded-t"
// //           src="https://via.placeholder.com/300"
// //           alt="Profile"
// //         /> */}
// //         {/* Details */}
// //       <div className="px-6 py-4 pt-9">
// //         {/* Post count, followers, following */}
// //         <div className="font-bold text-xl mb-2 text-center mt-6">John Doe</div>
// //         <div className="flex justify-between text-sm mb-2">
// //           <span>Posts</span>
// //           <span>Followers</span>
// //           <span>Following</span>
// //         </div>
// //         <div className="flex justify-between text-sm mb-2">
// //           <span>10</span>
// //           <span>100</span>
// //           <span>50</span>
// //         </div>
// //         {/* Bio */}
// //         <p className="text-gray-700 text-base">
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
// //           iaculis mauris.
// //         </p>
// //       </div>
// //         {/* Avatar */}
// //         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //           <img
// //             className="rounded-full w-24 h-24"
// //             src="https://via.placeholder.com/150"
// //             alt="Avatar"
// //           />
// //         </div>
// //       </div>
      
// //     </div>
// //   );
// // };

// // export default ProfileCard;

// // import React from 'react';

// // const ProfileCard = () => {
// //   return (
// //     <div className="max-w-sm ml-3 mt-9 pt-9">
      
// //       <div className="relative rounded-t shadow-lg">
// //         {/* Avatar */}
// //         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //           <img
// //             className="rounded-full w-24 h-24"
// //             src="https://via.placeholder.com/150"
// //             alt="Avatar"
// //           />
// //         </div>
// //         {/* Details */}
// //         <div className="px-6 py-4 pt-9 border-b border-gray-300">
// //           {/* Name */}
// //           <div className="font-bold text-xl mb-2 text-center mt-6">John Doe</div>
// //           {/* Horizontal line */}
// //           <div className="border-t border-gray-300 my-4"></div>
// //           {/* Post count, followers, following */}
// //           <div className="flex justify-between text-sm mb-2">
// //             <span>Posts</span>
// //             <span>Followers</span>
// //             <span>Following</span>
// //           </div>
// //           <div className="flex justify-between text-sm mb-2">
// //             <span>10</span>
// //             <span>100</span>
// //             <span>50</span>
// //           </div>
// //           {/* Bio */}
// //           <p className="text-gray-700 text-base">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
// //             iaculis mauris.
// //           </p>
// //         </div>
// //       </div>
      
// //     </div>
// //   );
// // };

// // export default ProfileCard;


// // import React from 'react';
// // import avatar from '../../assets/avatar.webp';
// // const ProfileCard = () => {
// //   return (
// //     <div className="max-w-xs ml-3 mt-9 pt-9 ">
      
// //       <div className="relative rounded-lg shadow-lg border border-black top-11">
// //         {/* Avatar */}
// //         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 mt-4">
// //           <img
// //             className="rounded-full w-24 h-24"
// //             src={avatar}
// //             alt="Avatar"
// //           />
// //         </div>
// //         {/* Details */}
// //         <div className="px-6 py-4 pt-9 border-b border-gray-300">
// //           {/* Name */}
// //           <div className="font-bold text-xl mb-2 text-center mt-6">John Doe</div>
// //           {/* Horizontal line */}
// //           <div className="border-t border-gray-300 my-4"></div>
// //           {/* Post count, followers, following */}
// //           <div className="flex justify-between text-sm mb-2">
// //             <span>Posts</span>
// //             <span>Followers</span>
// //             <span>Following</span>
// //           </div>
// //           <div className="flex justify-between text-sm mb-2">
// //             <span>10</span>
// //             <span>100</span>
// //             <span>50</span>
// //           </div>
// //           {/* Bio */}
// //           <p className="text-gray-700 text-base">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
// //             iaculis mauris.
// //           </p>
// //         </div>
// //       </div>
      
// //     </div>
// //   );
// // };

// // export default ProfileCard;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/AuthAction';

const ProfileCard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData?.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <div className="max-w-xs ml-3 mt-9 pt-9 ">
      <div className="relative rounded-lg shadow-lg border border-black top-11">
        {/* Avatar */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 mt-4">
          <img
            className="rounded-full w-24 h-24"
            src={user?.profilePic || 'https://via.placeholder.com/150'}
            alt="Avatar"
          />
        </div>
        {/* Details */}
        <div className="px-6 py-4 pt-9 border-b border-gray-300">
          {/* Name */}
          <div className="font-bold text-xl mb-2 text-center mt-6">
            {user?.username || 'Username'}
          </div>
          {/* Horizontal line */}
          <div className="border-t border-gray-300 my-4"></div>
          {/* Post count, followers, following */}
          <div className="flex justify-between text-sm mb-2">
            <span>Posts</span>
            <span>Followers</span>
            <span>Following</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>{user?.posts || 0}</span>
            <span>{user?.followers || 0}</span>
            <span>{user?.following || 0}</span>
          </div>
          {/* Bio */}
          <p className="text-gray-700 text-base">
            {user?.bio || 'Add a bio to your profile.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../../actions/UserAction';

// const ProfileCard = ({ userId }) => {
//   const dispatch = useDispatch();
//   const profile = useSelector((state) => state.profileReducer.profile);

//   useEffect(() => {
//     if (userId) {
//       dispatch(getUserProfile(userId));
//     }
//   }, [dispatch, userId]);

//   return (
//     <div className="max-w-xs ml-3 mt-9 pt-9 ">
//       <div className="relative rounded-lg shadow-lg border border-black top-11">
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 mt-4">
//           <img
//             className="rounded-full w-24 h-24"
//             src={profile?.profilePic || 'https://via.placeholder.com/150'}
//             alt="Avatar"
//           />
//         </div>
//         <div className="px-6 py-4 pt-9 border-b border-gray-300">
//           <div className="font-bold text-xl mb-2 text-center mt-6">{profile?.username}</div>
//           <div className="border-t border-gray-300 my-4"></div>
//           <div className="flex justify-between text-sm mb-2">
//             <span>Posts</span>
//             <span>Followers</span>
//             <span>Following</span>
//           </div>
//           <div className="flex justify-between text-sm mb-2">
//             <span>{profile?.posts || 0}</span>
//             <span>{profile?.followersCount || 0}</span>
//             <span>{profile?.followingCount || 0}</span>
//           </div>
//           <p className="text-gray-700 text-base">{profile?.bio || 'Add a bio to your profile.'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
