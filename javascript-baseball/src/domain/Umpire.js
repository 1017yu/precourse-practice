import ERROR_MESSAGES from '../constants/errorMessages.js';
import { BALL_COUNT } from '../constants/options.js';
import errorHandler from '../error/handler.js';
import { isValidNumber, isValidLength } from '../validators/index.js';

class Umpire {
  constructor(playerNumberSet) {
    this.playerNumberSet = Array.from(playerNumberSet, Number);
    this.#validate(this.playerNumberSet);
  }

  /**
   * 유저의 입력과 정답을 비교하여 볼카운트를 출력한다.
   * @param {number[]} opponentNumberSet 상대방(컴퓨터)의 정답 번호 배열
   * @returns {string} 유저의 입력과 정답을 비교하여 생성한 문자열 (ex. '1볼 1스트라이크')
   */
  ballcount(opponentNumberSet) {
    const [balls, strikes] = this.#calculateBallcount(opponentNumberSet);
    if (!balls && !strikes) return `${BALL_COUNT.nothing}`;

    return (
      (balls ? `${balls}${BALL_COUNT.ball} ` : '') +
      (strikes ? `${strikes}${BALL_COUNT.strike}` : '')
    );
  }

  /**
   * 유저가 승리 조건을 충족했는지 판별한다.
   * @param {string} ballcount 유저의 입력과 정답을 비교하여 생성된 문자열 (ex. '1볼 1스트라이크')
   * @returns {boolean} 유저가 승리조건(3 스트라이크)를 충족했다면 true, 그렇지 않다면 false
   */
  isPlayerWin(ballcount) {
    return ballcount === `${BALL_COUNT.length}${BALL_COUNT.strike}`;
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
