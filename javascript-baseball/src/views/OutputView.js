import { Console } from '@woowacourse/mission-utils';
import OutputMessage from '../constants/OutputMessage.js';

const OutputView = {
  printIntro() {
    Console.print(OutputMessage.intro);
  },
};

export default OutputView;
