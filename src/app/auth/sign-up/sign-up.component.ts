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
  submitted = false;

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

  get f() { return this.signUpForm.controls; }

  onSubmit(): void {
    this.submitted = true;

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
