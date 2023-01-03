import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Exercise} from "@workout/excercise-lib/data-access";
import {map, Observable} from 'rxjs';
import {arrayRemove, arrayUnion} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(private afs: AngularFirestore) {
  }


  updateExercise(exercise: Exercise, newName?: string) {
    console.log(exercise);
    console.log(newName);
    return this.afs.collection('Exercise').doc(`/${exercise.id}`).update({
      name: arrayUnion(newName)
    });
  }

  deleteExercise(exercise: Exercise, exerciseToRemove: string) {
    const exerciseRef = this.afs.collection('Exercise').doc(`/${exercise.id}`);
    return exerciseRef.update({
      name: arrayRemove(exerciseToRemove)
    });
  }


  getAllExercises(): Observable<{ id: string }[]> {
    const exercisesRef = this.afs.collection('Exercise');
    return exercisesRef.snapshotChanges().pipe(
      map(exercises => {
        return exercises.map(exercise => {
          const data = exercise.payload.doc.data();
          const id = exercise.payload.doc.id;
          return Object.assign({id}, data);
        });
      })
    );
  }

  getAllExerciseGroups(): Observable<Exercise[]> {
    const exercisesRef = this.afs.collection('Exercise');
    return exercisesRef.snapshotChanges().pipe(
      map(exercises => {
        return exercises.map(exercise => {
          const id = exercise.payload.doc.id;
          return Object.assign({id});
        });
      })
    );


  }

  deleteExerciseGroup(id: string) {
    return this.afs.doc("Exercise/" + id).delete();
  }

  createExerciseGroup(id: string) {
    const exerciseRef = this.afs.collection('Exercise').doc(id);
    return exerciseRef.set({name:['']});
  }


}
