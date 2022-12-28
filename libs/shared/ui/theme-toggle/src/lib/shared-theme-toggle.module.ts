import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleUiComponent } from './toggle-ui/toggle-ui.component';
import {MaterialModule} from "@workout/material";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ToggleUiComponent],
  exports: [
    ToggleUiComponent
  ]
})
export class SharedThemeToggleModule {}
