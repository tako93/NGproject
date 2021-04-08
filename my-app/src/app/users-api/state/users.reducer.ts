import { state } from '@angular/animations';
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { IUsers } from '../users-api';
import { createUserActon, getUserActon, setUsersAction } from './users.actions';

export interface IUsersState {
  users: IUsers[];
  loading: boolean;
  user?: IUsers | null;
}

const InitialState: IUsersState = {
  users: [],
  user: null,
  loading: false,
};


export const userReducer = createReducer(
  InitialState,
  on(
    createUserActon,
    (state, action): IUsersState => {
      return {
        ...state,
        user: action.user,
      };
    }
  ),
  on(
    getUserActon,
    (state, action): IUsersState => {
      return {
        ...state,
        users: action.users,
      };
    }
    ),
    on(setUsersAction, (state, action): IUsersState => {
        return {
            ...state,
            users: action.users
      }
  })
);
