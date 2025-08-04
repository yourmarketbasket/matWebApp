import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaccoComponent } from './sacco.component';

const routes: Routes = [{ path: '', component: SaccoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaccoRoutingModule { }
