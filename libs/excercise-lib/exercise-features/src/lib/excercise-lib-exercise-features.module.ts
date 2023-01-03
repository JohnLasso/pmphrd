import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';
import {ExerciseUiModule} from "@workout/excercise-lib/exercise-ui";
import {RouterModule} from "@angular/router";
import {exerciseLibFeatureRoutes} from "./exercise-lib-features.routes";
import {MaterialModule} from "@workout/material";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, ExerciseUiModule, MaterialModule,
        RouterModule.forChild(exerciseLibFeatureRoutes), ReactiveFormsModule,
    ],
  declarations: [ExerciseLibraryComponent],
  exports: [
    ExerciseLibraryComponent
  ]
})
export class ExcerciseLibExerciseFeaturesModule {}
