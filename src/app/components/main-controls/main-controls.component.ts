import { Component, OnInit } from '@angular/core';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-main-controls',
  templateUrl: './main-controls.component.html',
  styleUrls: ['./main-controls.component.scss']
})
export class MainControlsComponent implements OnInit {
  paperIcon = faHandPaper;
  rockIcon = faHandRock;
  scissorsIcon = faHandScissors;

  constructor() { }

  ngOnInit(): void {
  }

}
