import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportStaffRoutingModule } from './support-staff-routing.module';
import { SupportStaffComponent } from './support-staff.component';
import { SaccoManagementComponent } from './sacco-management/sacco-management.component';
import { SystemMonitoringComponent } from './system-monitoring/system-monitoring.component';
import { InquiryManagementComponent } from './inquiry-management/inquiry-management.component';
import { DriverSupportComponent } from './driver-support/driver-support.component';
import { CancellationReallocationComponent } from './cancellation-reallocation/cancellation-reallocation.component';
import { PayrollDisputesComponent } from './payroll-disputes/payroll-disputes.component';
import { ReportsComponent } from './reports/reports.component';
import { EscalationComponent } from './escalation/escalation.component';


@NgModule({
  declarations: [
    SupportStaffComponent,
    SaccoManagementComponent,
    SystemMonitoringComponent,
    InquiryManagementComponent,
    DriverSupportComponent,
    CancellationReallocationComponent,
    PayrollDisputesComponent,
    ReportsComponent,
    EscalationComponent
  ],
  imports: [
    CommonModule,
    SupportStaffRoutingModule
  ]
})
export class SupportStaffModule { }
