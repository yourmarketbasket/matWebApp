import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueManagerComponent } from './queue-manager.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: QueueManagerComponent,
    canActivate: [authGuard],
    data: { roles: ['queue_manager'] }
    // TODO: Add child routes for queue-manager pages
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueManagerRoutingModule { }
