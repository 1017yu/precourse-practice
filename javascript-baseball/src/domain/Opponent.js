import { Random } from '@woowacourse/mission-utils';
import RANDOM_NUMBER from '../constants/option.js';

class Opponent {
  getRandomNumberSet() {
    return this.#createRandomNumberSet();
  }

  #createRandomNumberSet() {
    const randomNumberSet = [];

    while (randomNumberSet.length < RANDOM_NUMBER.length) {
      const number = this.#generateRandomNumber();

      if (!randomNumberSet.includes(number)) randomNumberSet.push(number);
    }

    return randomNumberSet;
  }

  #generateRandomNumber() {
    return Random.pickNumberInRange(RANDOM_NUMBER.min, RANDOM_NUMBER.max);
  }
}

export default Opponent;
