import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShellModule, authRoutes} from "@workout/shell";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([{
    path: '',
    children: authRoutes
  }], {initialNavigation: 'enabledNonBlocking'}), ShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
