import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMovileComponent } from './nav-bar-movile.component';

describe('NavBarMovileComponent', () => {
  let component: NavBarMovileComponent;
  let fixture: ComponentFixture<NavBarMovileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarMovileComponent]
    });
    fixture = TestBed.createComponent(NavBarMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
