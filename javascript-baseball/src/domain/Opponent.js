import { Random } from '@woowacourse/mission-utils';
import { BALL_COUNT } from '../constants/options.js';

class Opponent {
  /**
   * 상대방의 정답 번호가 담긴 배열을 반환한다.
   * @returns {number[]} 상대방(컴퓨터)의 번호가 담긴 배열
   */
  getRandomNumberSet() {
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
