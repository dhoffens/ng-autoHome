import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceScheduleComponent } from './maintenance-schedule.component';

describe('MaintenanceScheduleComponent', () => {
  let component: MaintenanceScheduleComponent;
  let fixture: ComponentFixture<MaintenanceScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintenanceScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
