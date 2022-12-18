import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route, RouterLink} from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '@workout/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {
  faCog,
  faBars,
  faRocket,
  faPowerOff,
  faUserCircle,
  faPlayCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
export {NavBarComponent}  from './components/nav-bar/nav-bar.component';

// lazy loading works
export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: 'planning',
    loadChildren: () =>
      import('@workout/planner-tool/feature').then((m) => m.PlannerToolFeatureModule)
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  declarations: [LoginComponent, LoginFormComponent, NavBarComponent],
  exports: [NavBarComponent]
})
export class AuthModule {
  constructor( faIconLibrary: FaIconLibrary) {
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
