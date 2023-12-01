import Car from '../domain/Car.js';
import Racing from '../domain/Racing.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingGameController {
  #attempts;

  #racing;

  constructor() {}

  async controll() {
    this.carNames = await this.#readCarNames();
    this.#racing = await this.#readAttempts();
    this.#race(this.carNames);
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

  #race(carNames) {
    OutputView.printResult();
    while (this.#attempts) {
      OutputView.printScoreBoard(this.#racing.move(carNames));
      this.#attempts -= 1;
    }
  }
}

export default RacingGameController;
