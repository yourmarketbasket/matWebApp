import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { TripsComponent } from './trips/trips.component';
import { IncomeComponent } from './income/income.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { HrPayrollComponent } from './hr-payroll/hr-payroll.component';


@NgModule({
  declarations: [
    OwnerComponent,
    TripsComponent,
    IncomeComponent,
    VehicleDetailsComponent,
    HrPayrollComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
