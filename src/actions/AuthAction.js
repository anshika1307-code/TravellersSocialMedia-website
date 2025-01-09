// import * as AuthApi from "../api/AuthRequests";
// export const signIn = (formData, navigate) => async (dispatch) => {
//   dispatch({ type: "AUTH_START" });
//   try {
//     const { data } = await AuthApi.signIn(formData);
//     dispatch({ type: "AUTH_SUCCESS", data: data });
//     navigate("../home", { replace: true });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "AUTH_FAIL" });
//   }
// };

// export const signUp = (formData, navigate) => async (dispatch) => {
//   dispatch({ type: "AUTH_START" });
//   try {
//     const { data } = await AuthApi.signUp(formData);
//     dispatch({ type: "AUTH_SUCCESS", data: data });
//     navigate("../home", { replace: true });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "AUTH_FAIL" });
//   }
// };


// export const logout = ()=> async(dispatch)=> {
//   dispatch({type: "LOG_OUT"})
// }

import * as AuthApi from '../api/AuthRequests';

// Action for user login
export const signIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: 'AUTH_SUCCESS', data: data });
    navigate('/Timeline', { replace: true });
  } catch (error) {
    console.error('Login failed:', error.response?.data?.message || error.message);
    alert(error.response?.data?.message || 'Login failed');
    dispatch({ type: 'AUTH_FAIL' });
  }
};

// Action for user signup
export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: 'AUTH_START' });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: 'AUTH_SUCCESS', data: data });
    navigate('/Timeline', { replace: true });
  } catch (error) {
    console.error('Signup failed:', error.response?.data?.message || error.message);
    alert(error.response?.data?.message || 'Signup failed');
    dispatch({ type: 'AUTH_FAIL' });
  }
};

// Action for user logout
export const logout = () => (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
};



export const fetchUserProfile = () => async (dispatch) => {
  try {
    const { data } = await AuthApi.fetchUserProfile();
    dispatch({ type: 'FETCH_USER_SUCCESS', data });
  } catch (error) {
    console.error('Failed to fetch user profile:', error.response?.data || error.message);
  }
};
// export const fetchUserProfile = (userId) => async (dispatch) => {
//   try {
//     const { data } = await AuthApi.fetchUserProfile(userId);
//     dispatch({ type: 'FETCH_PROFILE_SUCCESS', data });
//   } catch (error) {
//     console.error('Failed to fetch user profile:', error.response?.data || error.message);
//   }
// };
