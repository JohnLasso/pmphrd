import { createAction, props } from '@ngrx/store';
import {Theme} from "@workout/shared/types";

export const setTheme = createAction(
  '[Theme] Set Theme',
  props<{ theme: Theme }>()
);

export const initTheme = createAction(
  '[Theme] Init Theme',
);
