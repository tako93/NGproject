import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Icars } from '../shared/cars';
import { editCarAction, setCarAction } from './cars.actions';

export interface CarState {
    car: Icars | null;
    data: Icars[];
}

export const InitialState: CarState = {
    car: null,
    data: []
};

export const carsReducer = createReducer(
  InitialState,
  on(
    editCarAction,
    (state, action): CarState => {
      return {
        ...state,
        car: action.car,
      };
    }
    ),
    on(setCarAction, (state, action): CarState => {
        return {
            ...state,
            data:action.data
      }
  })
);
