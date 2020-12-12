import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeasurementComponent } from './list-measurement.component';

describe('ListMeasurementComponent', () => {
  let component: ListMeasurementComponent;
  let fixture: ComponentFixture<ListMeasurementComponent>;

  beforeEach(async(() => {
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
