import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface GameResult {
  playerIcon: IconDefinition,
  opponentIcon: IconDefinition,
  playerWins: boolean,
  opponentWins: boolean,
  gameTimestamp: Date
}
