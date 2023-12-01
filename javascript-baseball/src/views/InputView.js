import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constants/inputMessages.js';

const InputView = {
  number() {
    return Console.readLineAsync(INPUT_MESSAGE.number);
  },

  retry() {
    return Console.readLineAsync(INPUT_MESSAGE.retry);
  },
};

export default InputView;
