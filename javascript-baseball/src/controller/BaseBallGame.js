import OutputView from '../views/OutputView.js';

class BaseBallGame {
  constructor() {
    OutputView.printIntro();
  }

  async controll() {}
}

export default BaseBallGame;
