import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadOfficeComponent } from './head-office.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HeadOfficeComponent,
    canActivate: [authGuard],
    data: { roles: ['superuser'] }
    // TODO: Add child routes for head-office pages
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadOfficeRoutingModule { }
