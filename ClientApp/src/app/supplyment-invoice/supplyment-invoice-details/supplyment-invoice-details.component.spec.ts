import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplymentInvoiceDetailsComponent } from './supplyment-invoice-details.component';

describe('SupplymentInvoiceDetailsComponent', () => {
  let component: SupplymentInvoiceDetailsComponent;
  let fixture: ComponentFixture<SupplymentInvoiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplymentInvoiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplymentInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
