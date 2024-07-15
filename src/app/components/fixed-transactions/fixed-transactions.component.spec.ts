import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTransactionsComponent } from './fixed-transactions.component';

describe('FixedTransactionsComponent', () => {
  let component: FixedTransactionsComponent;
  let fixture: ComponentFixture<FixedTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
