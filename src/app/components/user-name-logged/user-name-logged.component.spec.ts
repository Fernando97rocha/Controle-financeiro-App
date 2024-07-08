import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameLoggedComponent } from './user-name-logged.component';

describe('UserNameLoggedComponent', () => {
  let component: UserNameLoggedComponent;
  let fixture: ComponentFixture<UserNameLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNameLoggedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNameLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
