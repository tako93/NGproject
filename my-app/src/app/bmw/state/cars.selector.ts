import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { Icars } from '../shared/cars';
import { CarState } from './cars.reducer';

export const getCarFeatureSelector = createFeatureSelector<CarState>('cars');

export const getCurrentCarSelector = createSelector(
  getCarFeatureSelector,
  (state) => state.car
);

export const getCarSelector = createSelector(
  getCarFeatureSelector,
  (state) => state.data
);

