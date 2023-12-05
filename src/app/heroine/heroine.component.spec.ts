import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroineComponent } from './heroine.component';

describe('HeroineComponent', () => {
  let component: HeroineComponent;
  let fixture: ComponentFixture<HeroineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroineComponent]
    });
    fixture = TestBed.createComponent(HeroineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
