import { Injectable, inject } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  public authState$ = authState(this.auth);
  public currentUser = toSignal(this.authState$);

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  signOut() {
    return signOut(this.auth);
  }

  getAuthState() {
    return this.authState$;
  }
}
