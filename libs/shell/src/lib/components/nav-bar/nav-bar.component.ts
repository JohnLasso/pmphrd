import { Component } from '@angular/core';


@Component({
  selector: 'workout-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  logo = 'assets/logo.png';
  navigation = [
    { link: 'about', label: 'about' },
    { link: 'feature-list', label: 'list' },
    { link: 'examples', label: 'examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'settings' }
  ];

  onLogoutClick() {
    console.log('logout');
  }
}
