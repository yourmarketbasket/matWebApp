import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: 'head-office', loadChildren: () => import('./head-office/head-office.module').then(m => m.HeadOfficeModule) }, { path: 'support-staff', loadChildren: () => import('./support-staff/support-staff.module').then(m => m.SupportStaffModule) }, { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'sacco', loadChildren: () => import('./sacco/sacco.module').then(m => m.SaccoModule) }, { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }, { path: 'queue-manager', loadChildren: () => import('./queue-manager/queue-manager.module').then(m => m.QueueManagerModule) }, { path: 'driver', loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
