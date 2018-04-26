import { User } from "./models/user";
import * as UsersActions from "./users-store.actions";
export interface UsersState {
  users: Array<User>;
  loading: boolean;
}

export const initialState: UsersState = {
  users: [],
  loading: false
};

export function usersReducer(
  state: UsersState = initialState,
  action: UsersActions.Actions
): UsersState {
  switch (action.type) {
    case UsersActions.LOAD_USERS: {
      // Just set the loading flag to true. This action will mostly be handled by effects
      return { ...state, loading: true };
    }

    case UsersActions.LOAD_USERS_COMPLETE: {
      return {
          ...state,
          users: action.users, // these are the users returned from the data-source
          loading: false
      };
  }

    default:
      return state;
  }
}
