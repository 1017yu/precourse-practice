import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printIntro() {
    Console.print(OUTPUT_MESSAGES.intro);
  },

  printOutro(date) {
    Console.print(OUTPUT_MESSAGES.outro(date));
  },

  printMenu(order) {
    Console.print(OUTPUT_MESSAGES.menu);

    order.forEach((quantity, menu) => {
      Console.print(`${menu} ${quantity}${SYMBOLS.unit}`);
    });
  },
};

export default OutputView;
