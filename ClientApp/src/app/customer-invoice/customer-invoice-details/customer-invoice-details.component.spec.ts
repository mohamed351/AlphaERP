import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerInvoiceDetailsComponent } from './customer-invoice-details.component';

describe('CustomerInvoiceDetailsComponent', () => {
  let component: CustomerInvoiceDetailsComponent;
  let fixture: ComponentFixture<CustomerInvoiceDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvoiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
