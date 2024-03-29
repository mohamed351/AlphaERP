import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCustomerInvoiceComponent } from './list-customer-invoice.component';

describe('ListCustomerInvoiceComponent', () => {
  let component: ListCustomerInvoiceComponent;
  let fixture: ComponentFixture<ListCustomerInvoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
