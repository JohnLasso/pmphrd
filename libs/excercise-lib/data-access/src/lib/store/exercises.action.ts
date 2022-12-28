import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { Exercise } from '../excercise-lib-data-access.module';


export const loadExercises = createAction('[Exercise] Load Exercises with props', props<{ exercises: Exercise[] }>());
export const initialExercise = createAction('[Exercise] Load Exercises initial');


export enum ExerciseActionTypes {
  ExercisesLoaded = '[Exercise] Exercises Loaded'
}

export class ExercisesLoaded implements Action {
  readonly type = ExerciseActionTypes.ExercisesLoaded;

  constructor(public payload: { exercises: Exercise[] }) {}
}
