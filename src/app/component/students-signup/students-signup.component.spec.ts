import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSignupComponent } from './students-signup.component';

describe('StudentsSignupComponent', () => {
  let component: StudentsSignupComponent;
  let fixture: ComponentFixture<StudentsSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
