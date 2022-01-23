import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });

  it('should display navbar pills', () => {
    expect(fixture.nativeElement.querySelector('[data-test="pills"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="records"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="rules"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="about"]')).toBeTruthy();
  });

  it('should display menu', () => {
    expect(fixture.nativeElement.querySelector('[data-test="menu"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="settings"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="profile"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="signout"]')).toBeTruthy();

  });
});
