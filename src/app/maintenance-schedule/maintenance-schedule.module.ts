import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceScheduleRoutingModule } from './maintenance-schedule-routing.module';
import { MaintenanceScheduleComponent } from './maintenance-schedule.component';


@NgModule({
  declarations: [
    MaintenanceScheduleComponent
  ],
  imports: [
    CommonModule,
    MaintenanceScheduleRoutingModule
  ]
})
export class MaintenanceScheduleModule { }
