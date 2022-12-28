import {createReducer, on} from '@ngrx/store';
import {Exercise} from "../models/exercise.interface";
import {loadExercises} from "./exercises.action";

export interface ExerciseState {
  exercises: Exercise[];
}

export const initialState: ExerciseState = {
  exercises: [{name: 'KB', description: 'knie', image: 'image'}]
};
export const exerciseReducerOther = createReducer(
  initialState,
  on(loadExercises, (state, {exercises}) => {
    return {
      ...state,
      exercises: exercises
    };
  }),);

