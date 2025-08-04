import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mat';
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
