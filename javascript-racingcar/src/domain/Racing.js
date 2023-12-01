import { Random } from '@woowacourse/mission-utils';
import { ERROR } from '../constants/messages.js';
import ErrorHandler from '../errors/handler.js';
import { isValidAttempts } from '../validators/index.js';

class Racing {
  #scoreBoard = new Map();

  constructor(attempts) {
    this.#validate(attempts);
  }

  move(carNames) {
    carNames.forEach((carName) => {
      const score = this.#getScore(carName);
      this.#scoreBoard.set(carName, this.#isMovingFoward() ? score + 1 : score);
    });

    return this.#scoreBoard;
  }

  getScoreBoard() {
    return this.#scoreBoard;
  }

  #validate(attempts) {
    if (!isValidAttempts(attempts)) ErrorHandler(ERROR.attempts);
  }

  #isMovingFoward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  #getScore(carName) {
    return this.#scoreBoard.get(carName) ?? 0;
  }
}

export default Racing;
