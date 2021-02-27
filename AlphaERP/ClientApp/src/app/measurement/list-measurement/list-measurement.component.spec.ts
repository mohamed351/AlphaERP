import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListMeasurementComponent } from './list-measurement.component';

describe('ListMeasurementComponent', () => {
  let component: ListMeasurementComponent;
  let fixture: ComponentFixture<ListMeasurementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
