import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExerciseLibraryComponent],
  exports: [
    ExerciseLibraryComponent
  ]
})
export class ExcerciseLibExerciseFeaturesModule {}
