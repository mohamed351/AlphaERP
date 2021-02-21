import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoiceDetailsComponent } from './customer-invoice-details.component';

describe('CustomerInvoiceDetailsComponent', () => {
  let component: CustomerInvoiceDetailsComponent;
  let fixture: ComponentFixture<CustomerInvoiceDetailsComponent>;

  beforeEach(async(() => {
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
