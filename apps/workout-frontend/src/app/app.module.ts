import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {AuthModule, authRoutes} from "@workout/auth";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([{
    path: 'auth',
    children: authRoutes
  }], {initialNavigation: 'enabledNonBlocking'}), AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
