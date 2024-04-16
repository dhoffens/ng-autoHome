import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MaintenanceScheduleRoutingModule } from './maintenance-schedule-routing.module';
import { MaintenanceScheduleComponent } from './maintenance-schedule.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
  declarations: [
    MaintenanceScheduleComponent
  ],
  imports: [
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CommonModule,
    MaintenanceScheduleRoutingModule,
    NgbModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
  ]
})
export class MaintenanceScheduleModule { }
