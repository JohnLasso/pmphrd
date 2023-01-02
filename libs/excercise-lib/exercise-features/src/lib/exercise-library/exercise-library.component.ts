import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'workout-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent {

  groups = [
    {
      name: 'Beine Fokus',
      exercises: ['Lowbar squats', 'Front squats']
    },
    {
      name: 'Rückenübung Fokus',
      exercises: ['Conventional deadlifts', 'Sumo deadlifts']
    },
    {
      name: 'Brust Fokus',
      exercises: ['Conventional deadlifts', 'Sumo deadlifts']
    },
    {
      name: 'Rückenübungen Support',
      exercises: ['Conventional deadlifts', 'Sumo deadlifts']
    },
    {
      name: 'Rückenübungen Support',
      exercises: ['Conventional deadlifts', 'Sumo deadlifts']
    }
  ];

  addExerciseToGroup(group: any, exercise: string) {
    group.exercises.push(exercise);
  }

  removeExerciseFromGroup(group: any, exercise: string) {
    const index = group.exercises.indexOf(exercise);
    if (index > -1) {
      group.exercises.splice(index, 1);
    }
  }
}
