import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseLibUiComponent } from './exercise-lib-ui.component';

describe('ExerciseLibUiComponent', () => {
  let component: ExerciseLibUiComponent;
  let fixture: ComponentFixture<ExerciseLibUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseLibUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseLibUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
