import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMessage: string | null = null;
  roles: string[] = ['passenger', 'sacco', 'owner', 'queue_manager', 'driver', 'support_staff', 'admin', 'superuser'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.errorMessage = null;
    const { name, email, phone, password, role } = this.signUpForm.value;

    const user: Partial<User> = { name, email, phone, password, role };

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
