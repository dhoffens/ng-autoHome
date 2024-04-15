import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceScheduleComponent } from './maintenance-schedule.component';

const routes: Routes = [{ path: '', component: MaintenanceScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceScheduleRoutingModule { }
