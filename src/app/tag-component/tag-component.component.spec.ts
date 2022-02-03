import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponentComponent } from './tag-component.component';

describe('TagComponentComponent', () => {
  let component: TagComponentComponent;
  let fixture: ComponentFixture<TagComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
