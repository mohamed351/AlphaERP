import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuateMeasureComponent } from './calcuate-measure.component';

describe('CalcuateMeasureComponent', () => {
  let component: CalcuateMeasureComponent;
  let fixture: ComponentFixture<CalcuateMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcuateMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuateMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
