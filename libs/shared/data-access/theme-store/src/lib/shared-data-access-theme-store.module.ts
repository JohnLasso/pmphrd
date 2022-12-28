import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {themeReducer} from "./theme.reducer";
import {ThemeEffects} from "./theme.effect";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('theme', themeReducer),
    EffectsModule.forFeature([ThemeEffects])],
})
export class SharedDataAccessThemeStoreModule {}
