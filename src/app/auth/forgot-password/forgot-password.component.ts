import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;
  submitted = false;

  constructor(
    private authService: AuthService
  ) {}

  onSubmit(form: any): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.errorMessage = null;
    this.successMessage = null;

    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.successMessage = 'Password reset link sent successfully. Please check your email.';
        form.reset();
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'An error occurred. Please try again.';
      }
    });
  }
}
