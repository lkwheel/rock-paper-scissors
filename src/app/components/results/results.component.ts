import { Component, OnInit } from '@angular/core';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  paperIcon = faHandPaper;
  rockIcon = faHandRock;
  scissorsIcon = faHandScissors;

  constructor() { }

  ngOnInit(): void {
  }

}
