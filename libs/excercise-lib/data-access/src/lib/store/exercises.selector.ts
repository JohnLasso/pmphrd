import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ExerciseState} from "./exercises.reducer";

export const selectExerciseState = createFeatureSelector<ExerciseState>('exercises');

export const selectExercises = createSelector(
  selectExerciseState,
  state => state.exercises
);
