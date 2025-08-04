import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadOfficeComponent } from './head-office.component';

const routes: Routes = [{ path: '', component: HeadOfficeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadOfficeRoutingModule { }
