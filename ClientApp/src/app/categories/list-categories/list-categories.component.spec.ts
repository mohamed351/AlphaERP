import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCategoriesComponent } from './list-categories.component';

describe('ListCategoriesComponent', () => {
  let component: ListCategoriesComponent;
  let fixture: ComponentFixture<ListCategoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
