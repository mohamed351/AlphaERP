import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListSuppliersComponent } from './list-suppliers.component';

describe('ListSuppliersComponent', () => {
  let component: ListSuppliersComponent;
  let fixture: ComponentFixture<ListSuppliersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
