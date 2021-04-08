import { createAction, props } from '@ngrx/store';
import { IUsers } from '../users-api';

export const createUserActon = createAction(
  '[User Create User]',
  props<{ user: IUsers }>()
);

export const getUserActon = createAction(
  '[User Get User]',
  props<{ users: IUsers[] }>()
);

export const setUsersAction = createAction(
  '[User set User]',
  props<{ users: IUsers[] }>()
);
