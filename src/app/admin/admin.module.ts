import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PerformanceMonitoringComponent } from './performance-monitoring/performance-monitoring.component';
import { EscalationQueueComponent } from './escalation-queue/escalation-queue.component';
import { SystemReportsComponent } from './system-reports/system-reports.component';


@NgModule({
  declarations: [
    AdminComponent,
    PerformanceMonitoringComponent,
    EscalationQueueComponent,
    SystemReportsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
