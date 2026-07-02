import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeservice } from './employeeservice';

describe('Employeeservice', () => {
  let component: Employeeservice;
  let fixture: ComponentFixture<Employeeservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeservice],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeeservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
