import Car from '../domain/Car.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingGameController {
  #carNames;

  constructor() {}

  async controll() {
    this.#carNames = await this.#readCarNames();
  }

  async #readCarNames() {
    try {
      return new Car(await InputView.carName()).getNames();
    } catch ({ message }) {
      OutputView.print(message);
      return this.#readCarNames();
    }
  }
}

export default RacingGameController;
