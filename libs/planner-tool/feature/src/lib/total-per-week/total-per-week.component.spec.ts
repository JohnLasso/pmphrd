import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPerWeekComponent } from './total-per-week.component';

describe('TotalPerWeekComponent', () => {
  let component: TotalPerWeekComponent;
  let fixture: ComponentFixture<TotalPerWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPerWeekComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalPerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
