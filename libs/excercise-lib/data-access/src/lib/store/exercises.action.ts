import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { Exercise } from '../excercise-lib-data-access.module';


export const loadExercises = createAction('[Exercise] Load Exercises');


export enum ExerciseActionTypes {
  ExercisesLoaded = '[Exercise] Exercises Loaded'
}

export class ExercisesLoaded implements Action {
  readonly type = ExerciseActionTypes.ExercisesLoaded;

  constructor(public payload: { exercises: Exercise[] }) {}
}
