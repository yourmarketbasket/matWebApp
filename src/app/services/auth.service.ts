import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
    const user = this.storageService.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string, mfaCode?: string, rememberMe: boolean = false): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password, mfaCode })
      .pipe(tap(user => {
        this.storageService.setItem('currentUser', user, rememberMe);
        this.currentUserSubject.next(user);
      }));
  }

  signup(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signup`, user)
      .pipe(tap(user => {
        // By default, don't remember the user on signup
        this.storageService.setItem('currentUser', user, false);
        this.currentUserSubject.next(user);
      }));
  }

  registerSuperuser(user: Partial<User>, adminKey: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register-superuser`, { ...user, adminKey });
  }

  forgotPassword(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(otp: string, newPassword: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reset-password`, { otp, newPassword });
  }

  setupMFA(userId: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/mfa/setup`, { userId });
  }

  verifyMFA(userId: string, code: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/mfa/verify`, { userId, code });
  }

  logout(): void {
    this.storageService.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    const user = this.currentUserValue;
    return user ? (user as any).token : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasRole(role: string): boolean {
    const user = this.currentUserValue;
    return user ? user.role === role : false;
  }
}
