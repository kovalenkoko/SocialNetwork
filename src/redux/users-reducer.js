import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_FOLLOW_IN_PROGRESS: {
      return {
        ...state,
        isFollowInProgress: action.isFollowInProgress
          ? [...state.isFollowInProgress, action.userId]
          : state.isFollowInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount };
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleIsFollowInProgress = (isFollowInProgress, userId) => {
  return { type: TOGGLE_FOLLOW_IN_PROGRESS, isFollowInProgress, userId };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowInProgress(true, userId));
    usersAPI.postFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleIsFollowInProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowInProgress(true, userId));
    usersAPI.deleteFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleIsFollowInProgress(false, userId));
    });
  };
};
export default usersReducer;
