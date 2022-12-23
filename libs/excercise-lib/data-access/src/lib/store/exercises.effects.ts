import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import {ExerciseService} from "../services/exercise.service";
import {ExerciseActionTypes, ExercisesLoaded, loadExercises} from "./exercises.action";

@Injectable()
@Injectable()
export class ExerciseEffects {
  loadExercises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadExercises),
      mergeMap(() =>
        this.exerciseService.getExercises().pipe(
          map(exercises => new ExercisesLoaded({exercises}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private exerciseService: ExerciseService) {}
}
