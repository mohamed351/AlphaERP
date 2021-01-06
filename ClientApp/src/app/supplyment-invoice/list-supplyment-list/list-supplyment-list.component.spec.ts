import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSupplymentListComponent } from './list-supplyment-list.component';

describe('ListSupplymentListComponent', () => {
  let component: ListSupplymentListComponent;
  let fixture: ComponentFixture<ListSupplymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSupplymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSupplymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
