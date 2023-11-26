import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/outputMessage.js';

const OutputView = {
  printIntro() {
    Console.print(OUTPUT_MESSAGE.intro);
  },

  printOutro() {
    Console.print(OUTPUT_MESSAGE.outro);
  },

  printBallCount(ballCount) {
    Console.print(ballCount);
  },
};

export default OutputView;
