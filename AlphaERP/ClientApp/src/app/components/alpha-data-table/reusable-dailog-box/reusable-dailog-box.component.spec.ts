import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReusableDailogBoxComponent } from './reusable-dailog-box.component';

describe('ReusableDailogBoxComponent', () => {
  let component: ReusableDailogBoxComponent;
  let fixture: ComponentFixture<ReusableDailogBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableDailogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableDailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
