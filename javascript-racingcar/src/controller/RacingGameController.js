import Car from '../domain/Car.js';
import Racing from '../domain/Racing.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingGameController {
  #attempts;

  constructor() {}

  async controll() {
    this.carNames = await this.#readCarNames();
    this.racing = await this.#readAttempts();
  }

  async #readCarNames() {
    try {
      return new Car(await InputView.carName()).getNames();
    } catch ({ message }) {
      OutputView.print(message);
      return this.#readCarNames();
    }
  }

  async #readAttempts() {
    try {
      this.#attempts = await InputView.attempts();
      return new Racing(this.#attempts);
    } catch ({ message }) {
      OutputView.print(message);
      return this.#readAttempts();
    }
  }
}

export default RacingGameController;
