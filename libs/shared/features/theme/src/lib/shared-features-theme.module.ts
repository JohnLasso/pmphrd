import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeToggleComponent} from './theme-toggle/theme-toggle.component';
import {SharedThemeToggleModule} from "@workout/shared/ui/theme-toggle";

@NgModule({
  imports: [CommonModule, SharedThemeToggleModule],
  declarations: [ThemeToggleComponent],
  exports: [ThemeToggleComponent]
})
export class SharedFeaturesThemeModule {
}
