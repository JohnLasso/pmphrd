import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import {setTheme} from "./theme.action";

@Injectable()
export class ThemeEffects {
  saveTheme$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setTheme),
        tap(action => {
          // Speichern des Themes in einem Backend-Service
          console.log(`Saving theme: ${action.theme}`);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
