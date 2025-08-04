import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueManagerRoutingModule } from './queue-manager-routing.module';
import { QueueManagerComponent } from './queue-manager.component';
import { TicketScanningComponent } from './ticket-scanning/ticket-scanning.component';
import { BoardingStatsComponent } from './boarding-stats/boarding-stats.component';


@NgModule({
  declarations: [
    QueueManagerComponent,
    TicketScanningComponent,
    BoardingStatsComponent
  ],
  imports: [
    CommonModule,
    QueueManagerRoutingModule
  ]
})
export class QueueManagerModule { }
