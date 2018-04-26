import { User } from "./models/user";
import { Action } from "@ngrx/store";

// We expose two actions, one to initiate loading, and one for handling the response
export const LOAD_USERS = "[Users] Load";
export const LOAD_USERS_COMPLETE = "[Users] Load:Complete";

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersComplete implements Action {
  readonly type = LOAD_USERS_COMPLETE;

  constructor(public users: User[]) {}
}

// for convenience, we export a new type with our Action-classes
export type Actions = LoadUsers | LoadUsersComplete;
