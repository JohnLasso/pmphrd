import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'workout-exercise-lib-ui',
  templateUrl: './exercise-lib-ui.component.html',
  styleUrls: ['./exercise-lib-ui.component.scss'],
})
export class ExerciseLibUiComponent {
  @Input() groupName?: string;
  @Input() exercises?: string[];
  @Input() expanded?: boolean;
  @Output() exerciseAdded = new EventEmitter<string>();
  @Output() exerciseRemoved = new EventEmitter<string>();

  exerciseControl = new FormControl();

  addExercise() {
    this.exerciseAdded.emit(this.exerciseControl.value);
    this.exerciseControl.reset();
  }

  removeExercise(exercise: string) {
    this.exerciseRemoved.emit(exercise);
  }
}
