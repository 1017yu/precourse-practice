import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages.js';

const InputView = {
  purchaseAmount() {
    return Console.readLineAsync(INPUT.purchaseAmount);
  },
};

export default InputView;
