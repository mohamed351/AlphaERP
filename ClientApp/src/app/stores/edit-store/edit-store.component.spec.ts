import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditStoreComponent } from './edit-store.component';

describe('EditStoreComponent', () => {
  let component: EditStoreComponent;
  let fixture: ComponentFixture<EditStoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
