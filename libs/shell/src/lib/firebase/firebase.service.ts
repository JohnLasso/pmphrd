import { Injectable } from '@angular/core';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private db: AngularFirestoreModule) { }
}
