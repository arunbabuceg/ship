import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoheroComponent } from './cohero.component';

describe('CoheroComponent', () => {
  let component: CoheroComponent;
  let fixture: ComponentFixture<CoheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoheroComponent]
    });
    fixture = TestBed.createComponent(CoheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
