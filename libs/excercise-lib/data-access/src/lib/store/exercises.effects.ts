import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import {ExerciseService} from "../services/exercise.service";
import {initialExercise, loadExercises} from "./exercises.action";


@Injectable()
export class ExerciseEffects {
  loadExercises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initialExercise),
      mergeMap(() =>
        this.exerciseService.getExercises().pipe(
          map(exercises => loadExercises({exercises}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private exerciseService: ExerciseService) {}
}
