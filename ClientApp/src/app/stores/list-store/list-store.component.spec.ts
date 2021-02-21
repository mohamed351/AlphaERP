import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListStoreComponent } from './list-store.component';

describe('ListStoreComponent', () => {
  let component: ListStoreComponent;
  let fixture: ComponentFixture<ListStoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
