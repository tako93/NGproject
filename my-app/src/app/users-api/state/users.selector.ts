import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUsersState } from "./users.reducer";


export const getUsersStateSelector = createFeatureSelector<IUsersState>(
  'users'
);

export const getUsersSelector = createSelector(
  getUsersStateSelector,
  (state) => state.users
);
