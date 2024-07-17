import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncomePopUpComponent } from './create-income-pop-up.component';

describe('CreateIncomePopUpComponent', () => {
  let component: CreateIncomePopUpComponent;
  let fixture: ComponentFixture<CreateIncomePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIncomePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIncomePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
