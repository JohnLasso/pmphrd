import {Component, EventEmitter, Output} from '@angular/core';
import {Authenticate} from '@workout/data-models';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../../auth/src/lib/data-access/auth/auth.service";

@Component({
  selector: 'workout-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() submitForm = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    this.submitForm.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate);
  }

  constructor(public authService: AuthService) {
  }
}
