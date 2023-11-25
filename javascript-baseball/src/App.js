import BaseBallGame from './controller/BaseBallGame.js';

class App {
  #controller;

  constructor() {
    this.#controller = new BaseBallGame();
  }

  async play() {
    await this.#controller.controll();
  }
}

const baseballGame = new App();
baseballGame.play();

export default App;
