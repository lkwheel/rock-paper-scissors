import { faHandPaper, faHandRock, faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { GameResult } from "../model/game-result";
import { GameSelection } from "../model/game-selection";

const paperIcon = faHandPaper;
const rockIcon = faHandRock;
const scissorsIcon = faHandScissors;

const rockSelection: GameSelection = {
  name: 'rock',
  icon: rockIcon,
  beats: 'scissors'
};
const paperSelection: GameSelection = {
  name: 'paper',
  icon: paperIcon,
  beats: 'rock'
};
const scissorsSelection: GameSelection = {
  name: 'scissors',
  icon: scissorsIcon,
  beats: 'paper'
};

export const ROCK: number = 0;
export const PAPER: number = 1;
export const SCISSORS: number = 2;

export const SELECTIONS: GameSelection[] = [
  rockSelection,
  paperSelection,
  scissorsSelection
];

/**
 * Makes a random {@link GameSelection} and returns it to the caller.
 *
 * @returns a random {@link GameSelection}
 */
function randomSelection(): GameSelection {
  return SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
}

function isWinner(selection: GameSelection, opponentSelection: GameSelection): boolean {
  return selection.beats === opponentSelection.name;
}

export function runGame(selection: GameSelection): GameResult {
  const opponentSelection = randomSelection();
  const playerWinner = isWinner(selection, opponentSelection);
  const opponentWinner = isWinner(opponentSelection, selection);
  return {
    playerIcon: selection.icon,
    opponentIcon: opponentSelection.icon,
    playerWins: playerWinner,
    opponentWins: opponentWinner
  };
}
