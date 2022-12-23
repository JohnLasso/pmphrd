import { Action } from '@ngrx/store';
import {Exercise} from "../models/exercise.interface";
import {ExerciseActionTypes, ExercisesLoaded} from "./exercises.action";

export interface ExerciseState {
  exercises: Exercise[];
}

export const initialState: ExerciseState = {
  exercises: [{name: 'KB', description: 'knie', image: 'image'}]
};

export function exerciseReducer(state = initialState, action: Action): ExerciseState {
  const exercisesLoadedAction = action as ExercisesLoaded;
  switch (action.type) {
    case ExerciseActionTypes.ExercisesLoaded:
      console.log('HERE state', state);
      console.log(exercisesLoadedAction.payload.exercises);
      return {
        ...state,
        exercises: exercisesLoadedAction.payload.exercises
      };
    default:
      return state;
  }
}
