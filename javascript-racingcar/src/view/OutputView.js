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
      Console.print(`${carName} : ${SYMBOLS.dash.repeat(score)}`);
    });
    Console.print(SYMBOLS.blank);
  },

  printWinners(winners) {
    Console.print(`${OUTPUT.winners}${winners}`);
  },
};

export default OutputView;
