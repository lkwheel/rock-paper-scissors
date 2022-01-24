import { Component, OnInit } from '@angular/core';
import { GameSelection } from '../../model/game-selection';
import { PAPER, ROCK, SCISSORS, SELECTIONS } from '../../utils/game-engine';

@Component({
  selector: 'app-main-controls',
  templateUrl: './main-controls.component.html',
  styleUrls: ['./main-controls.component.scss']
})
export class MainControlsComponent implements OnInit {

  rock: GameSelection = SELECTIONS[ROCK];
  paper: GameSelection = SELECTIONS[PAPER];
  scissors: GameSelection = SELECTIONS[SCISSORS];

  constructor() { }

  ngOnInit(): void {
  }

  selection(e: GameSelection) {
    console.log(e);
  }

}
