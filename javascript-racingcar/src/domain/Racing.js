import { ERROR } from '../constants/messages.js';
import ErrorHandler from '../errors/handler.js';
import { isValidAttempts } from '../validators/index.js';

class Racing {
  constructor(attempts) {
    this.#validate(attempts);
  }

  #validate(attempts) {
    if (!isValidAttempts(attempts)) ErrorHandler(ERROR.attempts);
  }
}

export default Racing;
