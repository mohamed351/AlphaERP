import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRefundedSupplymentInvoiceComponent } from './all-refunded-supplyment-invoice.component';

describe('AllRefundedSupplymentInvoiceComponent', () => {
  let component: AllRefundedSupplymentInvoiceComponent;
  let fixture: ComponentFixture<AllRefundedSupplymentInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRefundedSupplymentInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRefundedSupplymentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
