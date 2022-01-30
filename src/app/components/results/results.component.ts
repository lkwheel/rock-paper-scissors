import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, Subscription, tap, throwError } from 'rxjs';
import { GameResult } from 'src/app/model/game-result';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  results: GameResult[] = [];
  gameResultSubscription!: Subscription;
  pageSize: number = 3;
  totalGames: number = 0;

  totalOpponentWins: number = 0;
  totalPlayerWins: number = 0;

  subscriptions: Subscription[] = [];

  paginator!: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.gameService.updateResults$.subscribe(
        () => this.getGameResultPage()));
  }

  setDataSourceAttributes() {
    if (this.paginator) {
      this.paginator.page
        .pipe(
          tap(() => this.getGameResultPage())
        )
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getGameResultPage(): void {
    this.subscriptions.push(
      this.gameService.getGameResults(
        "desc",
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 3
      )
        .pipe(
          tap(resultPage => {
            this.results = resultPage.page;
            this.totalPlayerWins = resultPage.playerWins;
            this.totalOpponentWins = resultPage.opponentWins;
            this.totalGames = resultPage.totalGames;
          }),
          catchError(err => {
            console.error(`Error loading game results`, err);
            return throwError(() => err);
          })
        ).subscribe());
  }

  getWinnerClass(isWinner: boolean): string {
    return isWinner ? 'game-button winner' : 'game-button';
  }

}
