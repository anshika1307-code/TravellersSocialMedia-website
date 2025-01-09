import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' });

// // Get user profile details
// export const getUserProfile = (userId) =>
//   API.get(`/profile/${userId}`, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//   });

// // Follow a user
// export const followUser = (userId) =>
//   API.post(
//     `/follow/${userId}`,
//     {},
//     {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     }
//   );

// // Unfollow a user
// export const unfollowUser = (userId) =>
//   API.post(
//     `/unfollow/${userId}`,
//     {},
//     {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     }
//   );


const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const getUserProfile = (userId) => API.get(`/profile/${userId}`);
