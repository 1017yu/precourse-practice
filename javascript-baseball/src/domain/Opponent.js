import { Random } from '@woowacourse/mission-utils';
import { BALL_COUNT } from '../constants/options.js';

class Opponent {
  getRandomNumberSet() {
    return this.#createRandomNumberSet();
  }

  #createRandomNumberSet() {
    const randomNumberSet = [];

    while (randomNumberSet.length < BALL_COUNT.length) {
      const number = this.#generateRandomNumber();

      if (!randomNumberSet.includes(number)) randomNumberSet.push(number);
    }

    return randomNumberSet;
  }

  #generateRandomNumber() {
    return Random.pickNumberInRange(BALL_COUNT.minNumber, BALL_COUNT.maxNumber);
  }
}

export default Opponent;
