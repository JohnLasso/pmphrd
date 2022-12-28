import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';
import {ExerciseUiModule} from "@workout/excercise-lib/exercise-ui";
import {RouterModule} from "@angular/router";
import {exerciseLibFeatureRoutes} from "./exercise-lib-features.routes";

@NgModule({
  imports: [CommonModule, ExerciseUiModule,
    RouterModule.forChild(exerciseLibFeatureRoutes),
  ],
  declarations: [ExerciseLibraryComponent],
  exports: [
    ExerciseLibraryComponent
  ]
})
export class ExcerciseLibExerciseFeaturesModule {}
