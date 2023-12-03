import Lotto from './Lotto.js';
import LottoController from './controller/LottoController.js';
import Purchase from './models/Purchase.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoController(Purchase, Lotto);
  }

  async play() {
    await this.#controller.controll();
  }
}

export default App;
