import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentScheduleComponent } from './component-schedule.component';

describe('ComponentScheduleComponent', () => {
  let component: ComponentScheduleComponent;
  let fixture: ComponentFixture<ComponentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
