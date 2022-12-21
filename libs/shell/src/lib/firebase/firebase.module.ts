import {NgModule} from '@angular/core';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "./environments";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  exports: [AngularFireModule, AngularFireAuthModule, AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,],
})
export class FirebaseModule {
}
