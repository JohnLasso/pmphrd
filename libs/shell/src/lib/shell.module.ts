import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {LoginComponent} from './containers/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {MaterialModule} from '@workout/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './components/footer/footer.component';
import {FirebaseModule} from "./firebase/firebase.module";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {AuthGuard} from "../../../auth/src/lib/data-access/auth/auth.guard";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {AuthService} from "../../../auth/src/lib/data-access/auth/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {
  exerciseReducerOther
} from "@workout/excercise-lib/data-access"
import {ExerciseEffects} from "@workout/excercise-lib/data-access";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ExerciseService} from "../../../excercise-lib/data-access/src/lib/services/exercise.service";
import {HttpClientModule} from "@angular/common/http";
import {ExcerciseLibExerciseFeaturesModule} from "@workout/excercise-lib/exercise-features";
import {SharedFeaturesThemeModule} from "@workout/shared/features/theme";
import {SharedDataAccessThemeStoreModule} from "@workout/shared/data-access/theme-store";

export {NavBarComponent} from './components/nav-bar/nav-bar.component';

export {
  AuthService,
  AuthGuard
}


// lazy loading works
export const authRoutes: Route[] = [
  {path: 'login', component: LoginComponent},
  {
    path: 'planning',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@workout/planner-tool/feature').then(
        (m) => m.PlannerToolFeatureModule
      ),
  },
  {
    path: 'exercise-lib',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@workout/excercise-lib/exercise-features').then(
        (m) => m.ExcerciseLibExerciseFeaturesModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, MaterialModule, FirebaseModule,
    SharedFeaturesThemeModule,
    SharedDataAccessThemeStoreModule,
    StoreModule.forRoot({exercises: exerciseReducerOther}),
    EffectsModule.forRoot([ExerciseEffects]), ExcerciseLibExerciseFeaturesModule],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    NavBarComponent,
    FooterComponent,
  ],
  providers: [AuthGuard, AuthService, ExerciseService],
  exports: [NavBarComponent, FooterComponent, FirebaseModule],
})
export class ShellModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faCog,
      faBars,
      faRocket,
      faPowerOff,
      faUserCircle,
      faPlayCircle,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }

}
