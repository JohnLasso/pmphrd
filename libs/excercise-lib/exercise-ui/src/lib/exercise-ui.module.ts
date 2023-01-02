import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseLibUiComponent } from './exercise-lib-ui/exercise-lib-ui.component';
import {MaterialModule} from "@workout/material";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [ExerciseLibUiComponent],
  exports: [ExerciseLibUiComponent]
})
export class ExerciseUiModule {}
