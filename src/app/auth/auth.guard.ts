import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    // Check for roles
    const expectedRoles = route.data['roles'] as Array<string>;
    if (expectedRoles) {
      const userRole = authService.currentUserValue?.role;
      if (!userRole || !expectedRoles.includes(userRole)) {
        // Redirect to a 'not-authorized' page or home
        router.navigate(['/']);
        return false;
      }
    }
    return true;
  }

  // Not logged in, so redirect to login page with the return url
  router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
