import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constants/InputMessage.js';

const InputView = {
  number() {
    return Console.readLineAsync(INPUT_MESSAGE.number);
  },
};

export default InputView;
