import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPERATOR } from 'os';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printPurchaseAmount(amount) {
    Console.print(`${LINE_SEPERATOR}${amount}개를 구매했습니다.`);
  },
};

export default OutputView;
