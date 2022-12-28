import {Component, Input} from '@angular/core';

@Component({
  selector: 'workout-exercise-lib-ui',
  templateUrl: './exercise-lib-ui.component.html',
  styleUrls: ['./exercise-lib-ui.component.scss'],
})
export class ExerciseLibUiComponent {
  @Input() header?: string;
  @Input() label?: string;
  @Input() options?: string[];
  @Input() selectedOption?: string;
}
