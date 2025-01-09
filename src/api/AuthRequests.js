import axios from 'axios';

// Base API URL
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Login API call
export const logIn = (formData) => API.post('/auth/login', formData);

// Signup API call
export const signUp = (formData) => {
  const config = {
    headers: {
      'Content-Type': formData instanceof FormData ? 'multipart/form-data' : 'application/json',
    },
  };
  return API.post('/auth/signup', formData, config);
};

export const fetchUserProfile = () => API.get('/profile', {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

