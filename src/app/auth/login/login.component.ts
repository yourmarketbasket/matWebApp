import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  mfaCode = '';
  rememberMe = false;
  errorMessage: string | null = null;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: any): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.errorMessage = null;
    this.authService.login(this.email, this.password, this.mfaCode || undefined, this.rememberMe).subscribe({
      next: (user) => {
        // Navigate based on user role
        this.router.navigate([`/${user.role}`]);
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Login failed. Please check your credentials.';
      }
    });
  }
}
