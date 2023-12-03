import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPERATOR } from 'os';
import { OUTPUT, STATS } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printPurchaseQuantity(amount) {
    Console.print(`${LINE_SEPERATOR}${amount}${OUTPUT.purchase}`);
  },

  printLotto(lottos) {
    lottos.forEach((lotto) =>
      Console.print(`[${lotto.join(SYMBOLS.commaWithSpace)}]`)
    );
  },

  printResult() {
    Console.print(`${LINE_SEPERATOR}${OUTPUT.stats}`);
    Console.print(`${OUTPUT.dash}`);
  },

  printStats(stats) {
    stats.forEach((stat, index) => {
      Console.print(`${STATS[index]} ${stat}개`);
    });
  },

  printProfitRatio(profitRatio) {
    Console.print(`${OUTPUT.profitRatio(profitRatio)}`);
  },
};

export default OutputView;
