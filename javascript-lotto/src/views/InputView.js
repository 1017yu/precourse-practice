import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages.js';

const InputView = {
  purchaseAmount() {
    return Console.readLineAsync(INPUT.purchaseAmount);
  },

  winningNumbers() {
    return Console.readLineAsync(INPUT.winningNumbers);
  },

  bonusNumber() {
    return Console.readLineAsync(INPUT.bonusNumber);
  },
};

export default InputView;
