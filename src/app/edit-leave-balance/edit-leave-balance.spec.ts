import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveBalance } from './edit-leave-balance';

describe('EditLeaveBalance', () => {
  let component: EditLeaveBalance;
  let fixture: ComponentFixture<EditLeaveBalance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeaveBalance],
    }).compileComponents();

    fixture = TestBed.createComponent(EditLeaveBalance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
