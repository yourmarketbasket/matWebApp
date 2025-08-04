import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportStaffComponent } from './support-staff.component';

const routes: Routes = [{ path: '', component: SupportStaffComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportStaffRoutingModule { }
