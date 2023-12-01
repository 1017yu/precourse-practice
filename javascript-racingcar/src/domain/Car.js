import { ERROR } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';
import ErrorHandler from '../errors/handler.js';
import { isValidCarName } from '../validators/index.js';

class Car {
  constructor(carNames) {
    this.carNames = carNames;
    this.#validate(this.carNames);
  }

  getNames() {
    return this.#splitCarNames(this.carNames);
  }

  #validate(carNames) {
    if (!isValidCarName(carNames)) ErrorHandler(ERROR.nameLength);
  }

  #splitCarNames(carNames) {
    return carNames.split(SYMBOLS.comma);
  }
}

export default Car;
