import { createAction, props } from '@ngrx/store';
import { Icars } from '../shared/cars';

export const editCarAction = createAction(
  '[Cars Edit Car]',
  props<{ car: Icars }>()
);


export const setCarAction = createAction(
  '[Cars Set Car List]',
  props<{ data: Icars[] }>()
);

