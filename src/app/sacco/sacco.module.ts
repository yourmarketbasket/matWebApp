import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaccoRoutingModule } from './sacco-routing.module';
import { SaccoComponent } from './sacco.component';
import { RouteManagementComponent } from './route-management/route-management.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { QueueManagementComponent } from './queue-management/queue-management.component';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { RevenueComponent } from './revenue/revenue.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { HrPayrollComponent } from './hr-payroll/hr-payroll.component';


@NgModule({
  declarations: [
    SaccoComponent,
    RouteManagementComponent,
    VehicleManagementComponent,
    QueueManagementComponent,
    DriverManagementComponent,
    RevenueComponent,
    PromotionsComponent,
    HrPayrollComponent
  ],
  imports: [
    CommonModule,
    SaccoRoutingModule
  ]
})
export class SaccoModule { }
