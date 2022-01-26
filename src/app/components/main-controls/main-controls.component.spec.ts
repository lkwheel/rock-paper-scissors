import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControlsComponent } from './main-controls.component';

describe('MainControlsComponent', () => {
  let component: MainControlsComponent;
  let fixture: ComponentFixture<MainControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display rock, paper, scissors buttons', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="gameButton"]').length).toBe(3);
  });
});
