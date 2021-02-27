import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSupplymentInvoiceComponent } from './add-supplyment-invoice.component';

describe('AddSupplymentInvoiceComponent', () => {
  let component: AddSupplymentInvoiceComponent;
  let fixture: ComponentFixture<AddSupplymentInvoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplymentInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplymentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
