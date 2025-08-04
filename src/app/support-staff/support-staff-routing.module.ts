import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportStaffComponent } from './support-staff.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SupportStaffComponent,
    canActivate: [authGuard],
    data: { roles: ['support_staff', 'admin', 'superuser'] } // Support staff, admins, and superusers can access this
    // TODO: Add child routes for support-staff pages
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportStaffRoutingModule { }
