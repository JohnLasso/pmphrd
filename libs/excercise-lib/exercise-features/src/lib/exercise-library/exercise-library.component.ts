import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../../../../shared/data-access/firebase/src/lib/services/firestore.service";
import {Exercise} from "@workout/excercise-lib/data-access";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'workout-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  exerciseGroups$: Observable<Exercise[]>;
  exerciseGroupControl = new FormControl();
  selectedGroup: string;


  constructor(public firestore: FirestoreService) {
  }

  ngOnInit(): void {
    this.exercises$ = this.firestore.getAllExercises();
    this.exerciseGroups$ = this.firestore.getAllExerciseGroups();
  }


  async addExerciseToGroup(exercise: Exercise, name: string) {
    await this.firestore.updateExercise(exercise, name);
  }

  async removeExerciseFromGroup(exercise: Exercise, name: string) {
    console.log(exercise);
    console.log(name);
   await this.firestore.deleteExercise(exercise, name);
  }

  async createExerciseGroup(newExerciseGroup: string) {
    await this.firestore.createExerciseGroup(newExerciseGroup);
  }

  async deleteExerciseGroup(deleteExerciseGroup: string) {
    await this.firestore.deleteExerciseGroup(deleteExerciseGroup);
  }

}
