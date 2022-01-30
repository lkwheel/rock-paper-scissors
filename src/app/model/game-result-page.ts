import { GameResult } from "./game-result";

export interface GameResultPage {
  playerWins: number;
  opponentWins: number;
  page: GameResult[];
  totalGames: number;
}
