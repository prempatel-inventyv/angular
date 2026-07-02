import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeehooks } from './employeehooks';

describe('Employeehooks', () => {
  let component: Employeehooks;
  let fixture: ComponentFixture<Employeehooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeehooks],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeehooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
