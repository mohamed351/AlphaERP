import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCustomersComponent } from './list-customers.component';

describe('ListCustomersComponent', () => {
  let component: ListCustomersComponent;
  let fixture: ComponentFixture<ListCustomersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
