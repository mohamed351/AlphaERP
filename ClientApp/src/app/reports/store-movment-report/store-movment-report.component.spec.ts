import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMovmentReportComponent } from './store-movment-report.component';

describe('StoreMovmentReportComponent', () => {
  let component: StoreMovmentReportComponent;
  let fixture: ComponentFixture<StoreMovmentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreMovmentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMovmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
