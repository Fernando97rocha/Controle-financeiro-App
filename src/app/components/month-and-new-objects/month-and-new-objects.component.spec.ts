import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthAndNewObjectsComponent } from './month-and-new-objects.component';

describe('MonthAndNewObjectsComponent', () => {
  let component: MonthAndNewObjectsComponent;
  let fixture: ComponentFixture<MonthAndNewObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthAndNewObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthAndNewObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
