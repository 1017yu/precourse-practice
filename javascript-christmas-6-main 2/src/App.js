import Promotion from './controller/Promotion.js';
import EventPlanner from './domain/EventPlanner.js';
import Order from './domain/models/Order.js';
import VisitDate from './domain/models/VisitDate.js';

class App {
  #controller;

  constructor() {
    this.#controller = new Promotion(EventPlanner, Order, VisitDate);
  }

  async run() {
    await this.#controller.start();
  }
}

export default App;
