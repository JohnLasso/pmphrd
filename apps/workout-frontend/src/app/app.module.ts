import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShellModule, authRoutes} from "@workout/shell";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([{
    path: '',
    children: authRoutes
  }], {initialNavigation: 'enabledNonBlocking'}), ShellModule, StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  bootstrap: [AppComponent],
})
export class AppModule {
}
