import RacingGameController from './controller/RacingGameController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new RacingGameController();
  }

  async play() {
    await this.#controller.controll();
  }
}

export default App;
