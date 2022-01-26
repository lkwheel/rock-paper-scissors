import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameSelection } from '../../model/game-selection';
import { PAPER, ROCK, runGame, SCISSORS, SELECTIONS } from '../../utils/game-engine';

@Component({
  selector: 'app-main-controls',
  templateUrl: './main-controls.component.html',
  styleUrls: ['./main-controls.component.scss']
})
export class MainControlsComponent implements OnInit {

  rock: GameSelection = SELECTIONS[ROCK];
  paper: GameSelection = SELECTIONS[PAPER];
  scissors: GameSelection = SELECTIONS[SCISSORS];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  selection(e: GameSelection) {
    const result = runGame(e);
    console.log(result);
    this.gameService.sendGameResult(result);
  }

}
