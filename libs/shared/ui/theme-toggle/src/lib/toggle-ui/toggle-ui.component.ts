import {Component, EventEmitter, Input, Output} from '@angular/core';
// @ts-ignore
import {Theme} from "@workout/shared/types";

@Component({
  selector: 'workout-toggle-ui',
  templateUrl: './toggle-ui.component.html',
  styleUrls: ['./toggle-ui.component.scss'],
})
export class ToggleUiComponent {
  public get selected(): Theme | undefined | null {
    return this._selected;
  }

  @Input()
  public set selected(value: Theme | undefined | null) {
    this._icon = `${value}_mode`;
    this._selected = value;
    console.log('icon', this._icon);
    console.log('selected', this._selected);
  }
  @Output()
  private readonly valueChanged = new EventEmitter<Theme>();

  private _icon: string | undefined;
  public get icon(): string | undefined {
    return this._icon;
  }

  private _selected: Theme | undefined | null;

  public toggle(selected: Theme): void {
    this.valueChanged.emit(selected === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }
}
