import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseLibUiComponent } from './exercise-lib-ui/exercise-lib-ui.component';
import {MaterialModule} from "@workout/material";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ExerciseLibUiComponent],
  exports: [ExerciseLibUiComponent]
})
export class ExerciseUiModule {}
