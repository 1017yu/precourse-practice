import ERROR_MESSAGES from '../constants/errorMessages.js';
import errorHandler from '../error/handler.js';
import { isValidNumber, isValidLength } from '../validators/index.js';

class Umpire {
  constructor(playerNumberSet) {
    this.playerNumberSet = playerNumberSet;
    this.#validate(this.playerNumberSet);
  }

  #validate(playerNumberSet) {
    if (!isValidNumber(playerNumberSet)) errorHandler(ERROR_MESSAGES.number);
    if (!isValidLength(playerNumberSet)) errorHandler(ERROR_MESSAGES.length);
  }
}

export default Umpire;
