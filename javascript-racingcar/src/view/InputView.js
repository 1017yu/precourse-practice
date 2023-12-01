import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages.js';

const InputView = {
  async carName() {
    return Console.readLineAsync(INPUT.carName);
  },

  async attempts() {
    return Console.readLineAsync(INPUT.attempts);
  },
};

export default InputView;
