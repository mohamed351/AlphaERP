import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingRefundListComponent } from './selling-refund-list.component';

describe('SellingRefundListComponent', () => {
  let component: SellingRefundListComponent;
  let fixture: ComponentFixture<SellingRefundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingRefundListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingRefundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
