import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';
import currencyFormatter from '../utils/currencyFormatter.js';

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

  printPreDiscount(preDiscount) {
    Console.print(OUTPUT_MESSAGES.preDiscount);
    Console.print(preDiscount);
  },

  printGiveaway(giveaway) {
    Console.print(OUTPUT_MESSAGES.giveaway);
    Console.print(giveaway);
  },

  printBenefits(benefitList) {
    Console.print(OUTPUT_MESSAGES.benefits);

    benefitList.forEach((discount, message) => {
      const amount = currencyFormatter(discount);

      if (discount) Console.print(`${message}${SYMBOLS.dash}${amount}`);
    });
  },

  printTotalBenefit(benefitList) {
    Console.print(OUTPUT_MESSAGES.totalBenefit);
    const discounts = Array.from(benefitList.values());

    const totalBenefit = discounts.reduce((acc, cur) => acc + cur, 0);

    Console.print(`${SYMBOLS.dash}${currencyFormatter(totalBenefit)}`);
  },
};

export default OutputView;
