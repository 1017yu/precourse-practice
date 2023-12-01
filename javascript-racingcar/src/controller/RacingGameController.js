import Car from '../domain/Car.js';
import Prize from '../domain/Prize.js';
import Racing from '../domain/Racing.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingGameController {
  #attempts;

  #racing;

  async controll() {
    this.carNames = await this.#readCarNames();
    this.#racing = await this.#readAttempts();
    this.#race(this.carNames);
    this.#showWinners();
  }

  async #readCarNames() {
    return new Car(await InputView.carName()).getNames();
  }

  async #readAttempts() {
    this.#attempts = await InputView.attempts();
    return new Racing(this.#attempts);
  }

  #race(carNames) {
    OutputView.printResult();
    while (this.#attempts) {
      OutputView.printScoreBoard(this.#racing.move(carNames));
      this.#attempts -= 1;
    }
  }

  #showWinners() {
    OutputView.printWinners(
      new Prize(this.#racing.getScoreBoard()).getWinners()
    );
  }
}

export default RacingGameController;
