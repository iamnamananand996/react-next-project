// reducers.ts

import {
  SET_USER_ROLE,
  SET_USERNAME,
  SET_USER,
  UserActionTypes,
} from './actions';

export interface User {
  username: string;
  role: string;
}

export interface UserStateType {
  user: User;
}

export const initialState: UserStateType = {
  user: {
    username: '',
    role: '',
  },
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserStateType => {
  switch (action.type) {
    case SET_USER_ROLE:
      return {
        ...state,
        user: {
          ...state.user,
          role: action.payload,
        },
      };
    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
