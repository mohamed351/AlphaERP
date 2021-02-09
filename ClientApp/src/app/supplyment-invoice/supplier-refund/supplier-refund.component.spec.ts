import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRefundComponent } from './supplier-refund.component';

describe('SupplierRefundComponent', () => {
  let component: SupplierRefundComponent;
  let fixture: ComponentFixture<SupplierRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
