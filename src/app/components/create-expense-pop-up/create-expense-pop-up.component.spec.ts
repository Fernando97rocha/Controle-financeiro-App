import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpensePopUpComponent } from './create-expense-pop-up.component';

describe('CreateExpensePopUpComponent', () => {
  let component: CreateExpensePopUpComponent;
  let fixture: ComponentFixture<CreateExpensePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateExpensePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExpensePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
