import {Component} from '@angular/core';
import {AuthService} from "../../../../../auth/src/lib/data-access/auth/auth.service";


@Component({
  selector: 'workout-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(
    public authService: AuthService
  ) {
  }
}
