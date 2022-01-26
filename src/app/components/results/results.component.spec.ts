import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let gameService: jasmine.SpyObj<GameService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      providers: [
        {
          provide: GameService,
          useFactory: () => spyOnClass(GameService)
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should display the results', () => {

  //   gameService = TestBed.inject(GameService) as jasmine.SpyObj<GameService>;

  //   gameService.gameResults$.and.returnValue()
  //   expect(fixture.nativeElement.querySelector('[data-test="results"]')).toBeTruthy();
  // });

  // it('should display the scores', () => {
  //   expect(fixture.nativeElement.querySelector('[data-test="playerScore"]')
  //     .innerText).toBe('2');
  //   expect(fixture.nativeElement.querySelector('[data-test="opponentScore"]')
  //     .innerText).toBe('1');
  // });

  // it('should display the number of games played', () => {
  //   expect(fixture.nativeElement.querySelectorAll('[data-test="playerResult"]').length).toBe(4);
  //   expect(fixture.nativeElement.querySelectorAll('[data-test="computerResult"]').length).toBe(4);
  // });
});
