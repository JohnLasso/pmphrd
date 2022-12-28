import { createSelector, createFeatureSelector } from '@ngrx/store';
import {ThemeState} from "./theme.reducer";

export const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectTheme = createSelector(
  selectThemeState,
  state => state.theme
);


