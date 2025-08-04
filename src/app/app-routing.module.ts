import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/head-office', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'head-office',
    loadChildren: () => import('./head-office/head-office.module').then(m => m.HeadOfficeModule),
    canActivate: [authGuard]
  },
  {
    path: 'support-staff',
    loadChildren: () => import('./support-staff/support-staff.module').then(m => m.SupportStaffModule),
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard]
  },
  {
    path: 'sacco',
    loadChildren: () => import('./sacco/sacco.module').then(m => m.SaccoModule),
    canActivate: [authGuard]
  },
  {
    path: 'owner',
    loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule),
    canActivate: [authGuard]
  },
  {
    path: 'queue-manager',
    loadChildren: () => import('./queue-manager/queue-manager.module').then(m => m.QueueManagerModule),
    canActivate: [authGuard]
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
