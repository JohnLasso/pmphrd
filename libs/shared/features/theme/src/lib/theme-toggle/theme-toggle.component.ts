import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Theme} from "@workout/shared/types";
import {Store} from "@ngrx/store";
import {selectTheme, setTheme} from "@workout/shared/data-access/theme-store";

@Component({
  selector: 'workout-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit{
  private _theme$: Observable<Theme> | undefined;
  public get theme$(): Observable<Theme> | undefined {
    return this._theme$;
  }
  constructor(private readonly store: Store) {}
  public ngOnInit(): void {
    this._theme$ = this.store.select(selectTheme);
  }

  public setTheme(theme: Theme): void {
    this.store.dispatch(setTheme({theme}));
  }
}
