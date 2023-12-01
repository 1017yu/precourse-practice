import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printIntro() {
    Console.print();
  },
};

export default OutputView;
