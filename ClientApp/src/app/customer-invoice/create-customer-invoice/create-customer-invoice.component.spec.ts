import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerInvoiceComponent } from './create-customer-invoice.component';

describe('CreateCustomerInvoiceComponent', () => {
  let component: CreateCustomerInvoiceComponent;
  let fixture: ComponentFixture<CreateCustomerInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
