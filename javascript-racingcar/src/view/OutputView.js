import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printResult() {
    Console.print(OUTPUT.result);
  },

  printScoreBoard(scoreBoard) {
    scoreBoard.forEach((score, carName) => {
      Console.print(`${carName} : ${score}`);
    });
    Console.print(SYMBOLS.blank);
  },
};

export default OutputView;
