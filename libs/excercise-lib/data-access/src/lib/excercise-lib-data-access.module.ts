import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from './models/exercise.interface';
import {ExerciseActionTypes, loadExercises } from './store/exercises.action';
import { selectExercises } from './store/exercises.selector';
import { ExerciseEffects } from './store/exercises.effects';
import {HttpClient, HttpClientModule} from "@angular/common/http";

export {
  Exercise,
  loadExercises,
  selectExercises,
  ExerciseEffects,
  ExerciseActionTypes
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class ExcerciseLibDataAccessModule {}
