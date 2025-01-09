import * as UserApi from '../api/UserRequests';

export const getUserProfile = (id) => async (dispatch) => {
  try {
    const { data } = await UserApi.getUserProfile(id);
    dispatch({ type: 'FETCH_PROFILE_SUCCESS', data });
  } catch (error) {
    console.error('Error fetching profile:', error.response?.data || error.message);
  }
};

export const followUser = (id) => async (dispatch) => {
  try {
    await UserApi.followUser(id);
    dispatch({ type: 'FOLLOW_USER', data: id });
  } catch (error) {
    console.error('Error following user:', error.response?.data || error.message);
  }
};

export const unfollowUser = (id) => async (dispatch) => {
  try {
    await UserApi.unfollowUser(id);
    dispatch({ type: 'UNFOLLOW_USER', data: id });
  } catch (error) {
    console.error('Error unfollowing user:', error.response?.data || error.message);
  }
};
