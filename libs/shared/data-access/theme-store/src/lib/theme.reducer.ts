import { createReducer, on } from '@ngrx/store';
import {setTheme} from "./theme.action";
import {Theme} from "@workout/shared/types";

export interface ThemeState {
  theme: Theme;
}

export const initialState: ThemeState = {
  theme: Theme.DARK
}

export const themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme }) => {
    return {
      ...state,
      theme: theme
    }; }),);

