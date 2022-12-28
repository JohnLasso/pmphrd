import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Exercise} from "@workout/excercise-lib/data-access";
import {Store} from "@ngrx/store";
import {selectExercises} from "@workout/excercise-lib/data-access";
import {initialExercise} from "@workout/excercise-lib/data-access";

@Component({
  selector: 'workout-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent implements OnInit{

  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string;
  exercises$?: Observable<Exercise[]>;

  constructor(private store: Store) {
    this.selectedOption = this.options[0];

  }

  ngOnInit(): void {
    this.store.dispatch(initialExercise());
    this.exercises$ = this.store.select(selectExercises);
  }
}
