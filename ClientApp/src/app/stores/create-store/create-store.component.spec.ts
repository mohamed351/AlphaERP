import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateStoreComponent } from './create-store.component';

describe('CreateStoreComponent', () => {
  let component: CreateStoreComponent;
  let fixture: ComponentFixture<CreateStoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
