import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMovileComponent } from './timeline-movile.component';

describe('TimelineMovileComponent', () => {
  let component: TimelineMovileComponent;
  let fixture: ComponentFixture<TimelineMovileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineMovileComponent]
    });
    fixture = TestBed.createComponent(TimelineMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
