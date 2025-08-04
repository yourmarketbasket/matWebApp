import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaccoComponent } from './sacco.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SaccoComponent,
    canActivate: [authGuard],
    data: { roles: ['sacco'] }
    // TODO: Add child routes for sacco pages
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaccoRoutingModule { }
