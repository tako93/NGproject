import { createReducer, on, ReducerManager } from '@ngrx/store';

import { reset, increment, decrement } from './counter.actions';

import { ICounter } from "./counter.interface"

export const initialState: ICounter = {
    user: {
      name: "Tako"
  },
  error: null,
  count: 0,
};

const _reducer = createReducer(
  initialState,
  on(reset, (state) => {
    return {
      ...state,
      count: 0,
    };
  }),
  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  })
);

export const counterReducer = (state: any, action: any) => _reducer(state, action)
