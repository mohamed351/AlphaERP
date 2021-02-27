import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MesurementCalculatorComponent } from './mesurement-calculator.component';

describe('MesurementCalculatorComponent', () => {
  let component: MesurementCalculatorComponent;
  let fixture: ComponentFixture<MesurementCalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MesurementCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesurementCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
