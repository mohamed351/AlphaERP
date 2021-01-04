import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesurementCalculatorComponent } from './mesurement-calculator.component';

describe('MesurementCalculatorComponent', () => {
  let component: MesurementCalculatorComponent;
  let fixture: ComponentFixture<MesurementCalculatorComponent>;

  beforeEach(async(() => {
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
