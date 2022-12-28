import {Component, OnInit} from '@angular/core';
import {ThemeService} from "@workout/shared/data-access/theme-store";

@Component({
  selector: 'workout-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'workout-frontend';

  constructor(private readonly theme: ThemeService) {}
  ngOnInit(): void {
    this.theme.toggleTheme().subscribe();
  }
}
