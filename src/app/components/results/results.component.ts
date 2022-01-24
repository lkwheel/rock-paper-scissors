import { Component, Input, OnInit } from '@angular/core';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { EMPTY, Observable, of } from 'rxjs';
import { GameResult } from 'src/app/model/game-result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results$: Observable<GameResult[]> = EMPTY;

  paperIcon = faHandPaper;
  rockIcon = faHandRock;
  scissorsIcon = faHandScissors;

  constructor() { }

  ngOnInit(): void {
    this.results$ = of([
      {
        playerIcon: this.paperIcon,
        opponentIcon: this.scissorsIcon,
        playerWins: true,
        opponentWins: false
      },
      {
        playerIcon: this.rockIcon,
        opponentIcon: this.scissorsIcon,
        playerWins: true,
        opponentWins: false
      },
      {
        playerIcon: this.scissorsIcon,
        opponentIcon: this.rockIcon,
        playerWins: false,
        opponentWins: true
      },
      {
        playerIcon: this.scissorsIcon,
        opponentIcon: this.scissorsIcon,
        playerWins: false,
        opponentWins: false
      },
    ]);
  }

  getWinnerClass(isWinner: boolean): string {
    return isWinner ? 'game-button winner' : 'game-button';
  }

}
