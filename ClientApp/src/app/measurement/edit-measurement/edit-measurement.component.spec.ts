import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMeasurementComponent } from './edit-measurement.component';

describe('EditMeasurementComponent', () => {
  let component: EditMeasurementComponent;
  let fixture: ComponentFixture<EditMeasurementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
