import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableDataTableComponent } from './reusable-data-table.component';

describe('ReusableDataTableComponent', () => {
  let component: ReusableDataTableComponent;
  let fixture: ComponentFixture<ReusableDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
