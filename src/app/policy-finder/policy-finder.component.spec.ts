import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFinderComponent } from './policy-finder.component';

describe('PolicyFinderComponent', () => {
  let component: PolicyFinderComponent;
  let fixture: ComponentFixture<PolicyFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
