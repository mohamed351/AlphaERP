import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSupplierComponent } from './edit-supplier.component';

describe('EditSupplierComponent', () => {
  let component: EditSupplierComponent;
  let fixture: ComponentFixture<EditSupplierComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
