import { Injectable, OnInit } from '@angular/core';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { Observable, of, Subject } from 'rxjs';
import { GameResult } from '../model/game-result';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit {

  private results: GameResult[] = [];

  private _gameResults = new Subject<GameResult[]>();
  gameResults$ = this._gameResults.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  sendGameResult(gameResult: GameResult) {
    this._gameResults.next(this.results = [...this.results, gameResult]);
  }
}
