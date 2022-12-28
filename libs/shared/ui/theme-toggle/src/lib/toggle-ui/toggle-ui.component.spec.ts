import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleUiComponent } from './toggle-ui.component';

describe('ToggleUiComponent', () => {
  let component: ToggleUiComponent;
  let fixture: ComponentFixture<ToggleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
