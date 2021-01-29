import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementDialogComponent } from './measurement-dialog.component';

describe('MeasurementDialogComponent', () => {
  let component: MeasurementDialogComponent;
  let fixture: ComponentFixture<MeasurementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
