import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsCustomerComponent } from './details-customer.component';

describe('DetailsCustomerComponent', () => {
  let component: DetailsCustomerComponent;
  let fixture: ComponentFixture<DetailsCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
