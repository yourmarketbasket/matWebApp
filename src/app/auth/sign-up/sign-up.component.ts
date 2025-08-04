import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm!: FormGroup;
  errorMessage: string | null = null;
  isButtonDisabled = true;
  private formSubscription!: Subscription;
  roles = [
    { value: 'passenger', name: 'Passenger' },
    { value: 'sacco', name: 'Sacco' },
    { value: 'owner', name: 'Owner' },
    { value: 'queue_manager', name: 'Queue Manager' },
    { value: 'driver', name: 'Driver' },
    { value: 'support_staff', name: 'Support Staff' },
    { value: 'admin', name: 'Admin' },
    { value: 'superuser', name: 'Superuser' }
  ];

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
      terms: [false, Validators.requiredTrue]
    });

    this.formSubscription = this.signUpForm.statusChanges.subscribe(status => {
      this.isButtonDisabled = status === 'INVALID';
    });
  }

  ngOnDestroy(): void {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
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
