import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { EMPTY, map, Observable, of, Subscription } from 'rxjs';
import { GameResult } from 'src/app/model/game-result';
import { GameService } from 'src/app/services/game.service';
import { opponentScoreReducer, playerScoreReducer } from 'src/app/utils/game-engine';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  results: GameResult[] = [];
  gameResultSubscription!: Subscription;

  totalOpponentWins: number = 0;
  totalPlayerWins: number = 0;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameResultSubscription = this.gameService.gameResults$.pipe(
      map((games: GameResult[]) => {
        this.totalPlayerWins = games.reduce(playerScoreReducer, 0);
        this.totalOpponentWins = games.reduce(opponentScoreReducer, 0);
        this.results = games;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.gameResultSubscription !== undefined) {
      this.gameResultSubscription.unsubscribe();
    }
  }

  getWinnerClass(isWinner: boolean): string {
    return isWinner ? 'game-button winner' : 'game-button';
  }

}
