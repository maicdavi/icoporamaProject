import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errorMessage = '';

  constructor(private readonly router: Router) {}

  login(username: string, password: string): void {
    if (username === 'admin' && password === 'admin123') {
      this.errorMessage = '';
      void this.router.navigate(['/home']);
      return;
    }

    this.errorMessage = 'Usuario o clave incorrectos';
  }
}
