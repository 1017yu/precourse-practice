import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import currencyFormatter from '../utils/currencyFormatter.js';

class Promotion {
  #domain;

  #order;

  #visitDate;

  constructor(EventPlanner, Order, VisitDate) {
    this.#domain = EventPlanner;
    this.#order = Order;
    this.#visitDate = VisitDate;
    OutputView.printIntro();
  }

  async start() {
    this.#visitDate = await this.#readVisitDate();
    this.#order = await this.#readOrder();
    this.#printPlanner(this.#visitDate, this.#order);
  }

  async #readVisitDate() {
    try {
      return new this.#visitDate(await InputView.readDate());
    } catch ({ message }) {
      OutputView.print(message);
      return this.#readVisitDate();
    }
  }

  async #readOrder() {
    try {
      return new this.#order(await InputView.readOrder());
    } catch ({ message }) {
      OutputView.print(message);
      return this.#readOrder();
    }
  }

  #printPlanner() {
    this.#domain = new this.#domain(this.#visitDate, this.#order);
    OutputView.printOutro(this.#visitDate.get());
    OutputView.printMenu(this.#order.getOrders());
    OutputView.printPreDiscount(
      currencyFormatter(this.#domain.getPreDiscount()),
    );
    OutputView.printGiveaway(this.#domain.getGiveaway());
    OutputView.printBenefits(this.#domain.getBenefitList());
    OutputView.printTotalBenefit(this.#domain.getBenefitList());
  }
}

export default Promotion;
