import {Inject, Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {DOCUMENT} from "@angular/common";
import {map, Observable} from "rxjs";
import { selectTheme } from './theme.selector';
import { setTheme } from './theme.action';
import { Theme } from '@workout/shared/types';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private readonly store: Store,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.store.dispatch(
      setTheme(
        document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
          ? {theme: Theme.DARK}
          : {theme: Theme.LIGHT}
      )
    );
  }

  public toggleTheme(): Observable<void> {
    return this.store.select(selectTheme).pipe(
      map((theme) => {
        this.document.body.classList.remove(...Object.values(Theme));
        this.document.body.classList.add(theme);
      })
    );
  }
}
