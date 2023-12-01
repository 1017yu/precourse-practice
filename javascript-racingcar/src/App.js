import RacingGameController from './controller/RacingGameController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new RacingGameController();
  }

  async play() {
    this.#controller.controll();
  }
}

export default App;
