import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountStatmentComponent } from './client-account-statment.component';

describe('ClientAccountStatmentComponent', () => {
  let component: ClientAccountStatmentComponent;
  let fixture: ComponentFixture<ClientAccountStatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountStatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
