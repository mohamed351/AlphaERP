import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRefundCompoentComponent } from './customer-refund-compoent.component';

describe('CustomerRefundCompoentComponent', () => {
  let component: CustomerRefundCompoentComponent;
  let fixture: ComponentFixture<CustomerRefundCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRefundCompoentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRefundCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
