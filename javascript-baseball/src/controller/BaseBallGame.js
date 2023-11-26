import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import Opponent from '../domain/Opponent.js';
import Umpire from '../domain/Umpire.js';

class BaseBallGame {
  constructor() {
    OutputView.printIntro();
  }

  async controll() {
    const opponentNumberSet = new Opponent().getRandomNumberSet();
    await this.#start(opponentNumberSet);
  }

  async #start(opponentNumberSet) {
    while (true) {
      const umpire = new Umpire(await InputView.number());
      const ballcount = umpire.ballcount(opponentNumberSet);

      OutputView.printBallCount(ballcount);
      if (umpire.isPlayerWin(ballcount)) break;
    }
  }
}

export default BaseBallGame;
