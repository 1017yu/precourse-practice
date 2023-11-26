import ERROR_MESSAGES from '../constants/errorMessages.js';
import { BALL_COUNT, NUMBER } from '../constants/options.js';
import errorHandler from '../error/handler.js';
import { isValidNumber, isValidLength } from '../validators/index.js';

class Umpire {
  constructor(playerNumberSet) {
    this.playerNumberSet = Array.from(playerNumberSet, Number);
    this.#validate(this.playerNumberSet);
  }

  ballcount(opponentNumberSet) {
    const [balls, strikes] = this.#calculateBallcount(opponentNumberSet);
    if (!balls && !strikes) return `${BALL_COUNT.nothing}`;

    return (
      (balls ? `${balls}${BALL_COUNT.ball} ` : '') +
      (strikes ? `${strikes}${BALL_COUNT.strike}` : '')
    );
  }

  isPlayerWin(ballcount) {
    return ballcount === `${NUMBER.length}${BALL_COUNT.strike}`;
  }

  #calculateBallcount(opponentNumberSet) {
    let strikes = 0;
    let balls = 0;

    this.playerNumberSet.forEach((number, index) => {
      if (number === opponentNumberSet[index]) return (strikes += 1);
      opponentNumberSet.includes(number) ? (balls += 1) : 0;
    });

    return [balls, strikes];
  }

  #validate(playerNumberSet) {
    if (!isValidNumber(playerNumberSet)) errorHandler(ERROR_MESSAGES.number);
    if (!isValidLength(playerNumberSet)) errorHandler(ERROR_MESSAGES.length);
  }
}

export default Umpire;
