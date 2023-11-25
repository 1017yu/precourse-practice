import BaseBallGame from './controller/BaseBallGame.js';

class App {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseBallGame();
  }

  async play() {
    await this.#baseballGame.controll();
  }
}

const baseballGame = new App();
baseballGame.play();

export default App;
