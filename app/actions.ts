// actions.ts

export type User = {
  username: string;
  role: string;
};

// Action Types
export const SET_USER_ROLE = 'SET_USER_ROLE';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USER = 'SET_USER';

interface SetUserRoleAction {
  type: typeof SET_USER_ROLE;
  payload: string;
}

interface SetUsernameAction {
  type: typeof SET_USERNAME;
  payload: string;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export type UserActionTypes =
  | SetUserRoleAction
  | SetUsernameAction
  | SetUserAction;

// Action Creators
export const setUserRole = (role: string) => ({
  type: SET_USER_ROLE,
  payload: role,
});

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user,
});
