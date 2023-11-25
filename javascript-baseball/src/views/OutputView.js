import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

const OutputView = {
  printIntro() {
    Console.print(OUTPUT_MESSAGE.intro);
  },
};

export default OutputView;
