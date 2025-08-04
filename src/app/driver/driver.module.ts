import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { TripRegistrationComponent } from './trip-registration/trip-registration.component';
import { TripMonitoringComponent } from './trip-monitoring/trip-monitoring.component';
import { PassengerVerificationComponent } from './passenger-verification/passenger-verification.component';
import { EarningsComponent } from './earnings/earnings.component';
import { TripCompletionComponent } from './trip-completion/trip-completion.component';


@NgModule({
  declarations: [
    DriverComponent,
    TripRegistrationComponent,
    TripMonitoringComponent,
    PassengerVerificationComponent,
    EarningsComponent,
    TripCompletionComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
