const profileReducer = (state = { profile: null, loading: false, error: false }, action) => {
    switch (action.type) {
      case 'FETCH_PROFILE_SUCCESS':
        return { ...state, profile: action.data, loading: false, error: false };
      case 'FOLLOW_USER':
        return {
          ...state,
          profile: {
            ...state.profile,
            followersCount: state.profile.followersCount + 1,
          },
        };
      case 'UNFOLLOW_USER':
        return {
          ...state,
          profile: {
            ...state.profile,
            followersCount: state.profile.followersCount - 1,
          },
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  