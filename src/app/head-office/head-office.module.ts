import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadOfficeRoutingModule } from './head-office-routing.module';
import { HeadOfficeComponent } from './head-office.component';
import { SupportStaffManagementComponent } from './support-staff-management/support-staff-management.component';
import { SystemOversightComponent } from './system-oversight/system-oversight.component';
import { PolicyManagementComponent } from './policy-management/policy-management.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';


@NgModule({
  declarations: [
    HeadOfficeComponent,
    SupportStaffManagementComponent,
    SystemOversightComponent,
    PolicyManagementComponent,
    AuditLogsComponent
  ],
  imports: [
    CommonModule,
    HeadOfficeRoutingModule
  ]
})
export class HeadOfficeModule { }
