import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

type UserRole = 'passenger' | 'sacco' | 'owner' | 'queue_manager' | 'driver' | 'support_staff' | 'admin' | 'superuser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  name = '';
  email = '';
  phone = '';
  password = '';
  role: UserRole | '' = '';
  acceptTerms = false;
  errorMessage: string | null = null;
  submitted = false;
  roleMap = new Map<string, string>([
    ['passenger', 'Passenger'],
    ['sacco', 'Sacco'],
    ['owner', 'Owner'],
    ['queue_manager', 'Queue Manager'],
    ['driver', 'Driver'],
    ['support_staff', 'Support Staff'],
    ['admin', 'Admin'],
    ['superuser', 'Superuser']
  ]);
  roles: string[] = Array.from(this.roleMap.keys());

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
    const user: Partial<User> = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
      role: this.role as UserRole
    };

    this.authService.signup(user).subscribe({
      next: (user) => {
        this.router.navigate([`/${user.role}`]);
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Sign-up failed. Please try again.';
      }
    });
  }
}
