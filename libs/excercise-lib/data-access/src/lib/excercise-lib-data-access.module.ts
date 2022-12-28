import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from './models/exercise.interface';
import {ExerciseActionTypes, initialExercise, loadExercises } from './store/exercises.action';
import { selectExercises } from './store/exercises.selector';
import { ExerciseEffects } from './store/exercises.effects';
import {HttpClientModule} from "@angular/common/http";
import { exerciseReducerOther } from './store/exercises.reducer';

export {
  Exercise,
  loadExercises,
  selectExercises,
  ExerciseEffects,
  ExerciseActionTypes,
  initialExercise,
  exerciseReducerOther
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class ExcerciseLibDataAccessModule {}
