import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { GameResult } from '../model/game-result';
import { GameResultPage } from '../model/game-result-page';
import { opponentScoreReducer, playerScoreReducer } from '../utils/game-engine';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit {

  private results: GameResult[] = [];

  private updateResults = new Subject<void>();
  updateResults$ = this.updateResults.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  sendGameResult(gameResult: GameResult) {
    this.results = [...this.results, gameResult];
    this.updateResults.next();
  }

  getGameResults(sortDirection: string, pageNumber: number, pageSize: number): Observable<GameResultPage> {
    const page = pageNumber || 0;
    const perPage = pageSize;
    const offset = page * perPage;
    let _results: GameResult[] = [];
    if (sortDirection === 'desc') {
      _results = this.results.sort((a, b) => a.gameTimestamp < b.gameTimestamp ? 1 : -1);
    } else if (sortDirection === 'asc') {
      _results = this.results.sort((a, b) => a.gameTimestamp > b.gameTimestamp ? 1 : -1);
    }
    const paginatedItems = _results.slice(offset).slice(0, pageSize);
    const totalPlayerWins = this.results.reduce(playerScoreReducer, 0);
    const totalOpponentWins = this.results.reduce(opponentScoreReducer, 0);
    return of({
      playerWins: totalPlayerWins,
      opponentWins: totalOpponentWins,
      page: paginatedItems,
      totalGames: this.results.length
    });
  }
}
