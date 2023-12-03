import LottoController from './controller/LottoController.js';
import Purchase from './models/Purchase.js';

class App {
  #controller;

  #puchase;

  constructor() {
    this.#puchase = Purchase;
    this.#controller = new LottoController(this.#puchase);
  }

  async play() {
    await this.#controller.controll();
  }
}

export default App;
