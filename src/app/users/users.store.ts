import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUsersStore from "./users-store/users-store.reducers";

/*it should find a State of type UsersState on the property 'users',
and if you remember, this is the same name as we used when importing StoreModule.forFeature('users', usersReducer) on our UsersModule. */

export const getUsersFeatureState = createFeatureSelector<
  fromUsersStore.UsersState
>("users");


/*By using createSelector, we can combine the feature-selector
with a selector defined further down in our state-tree.  */
export const getUsersEntities = createSelector(
  getUsersFeatureState,
  fromUsersStore.getUserEntities
);
