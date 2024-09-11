import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTooltipComponent } from './button-tooltip.component';

describe('ButtonTooltipComponent', () => {
  let component: ButtonTooltipComponent;
  let fixture: ComponentFixture<ButtonTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTooltipComponent]
    });
    fixture = TestBed.createComponent(ButtonTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
