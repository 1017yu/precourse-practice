import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import Opponent from '../domain/Opponent.js';
import Umpire from '../domain/Umpire.js';
import { GAME_OPTION } from '../constants/options.js';
import errorHandler from '../error/handler.js';
import { isValidRetryInput } from '../validators/index.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';

class BaseBallGame {
  constructor() {
    OutputView.printIntro();
  }

  async controll() {
    const opponentNumberSet = new Opponent().getRandomNumberSet();

    await this.#start(opponentNumberSet);
    await this.#end();
  }

  async #start(opponentNumberSet) {
    while (true) {
      const umpire = new Umpire(await InputView.number());
      const ballcount = umpire.ballcount(opponentNumberSet);

      OutputView.printBallCount(ballcount);

      if (umpire.isPlayerWin(ballcount)) break;
    }
  }

  async #end() {
    OutputView.printOutro();

    const retryInput = await InputView.retry();

    if (!isValidRetryInput(retryInput)) errorHandler(ERROR_MESSAGES.retry);
    if (retryInput === GAME_OPTION.retry) this.controll();
  }
}

export default BaseBallGame;
