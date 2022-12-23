import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Exercise} from "@workout/excercise-lib/data-access";
import {Store} from "@ngrx/store";
import {loadExercises} from "@workout/excercise-lib/data-access";
import {selectExercises} from "@workout/excercise-lib/data-access";

@Component({
  selector: 'workout-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent implements OnInit{
  exercises$?: Observable<Exercise[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadExercises());
    this.exercises$ = this.store.select(selectExercises);
  }
}
