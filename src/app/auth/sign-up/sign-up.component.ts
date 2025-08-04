import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  authService = inject(AuthService);
  router = inject(Router);

  signUpWithGoogle() {
    this.authService.googleSignIn().then(() => {
      this.router.navigate(['/']);
    });
  }
}
