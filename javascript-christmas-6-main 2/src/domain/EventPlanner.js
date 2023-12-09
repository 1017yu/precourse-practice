import { GIVEAWAY, MENU } from '../constants/menus.js';
import { OPTIONS, THRESHOLDS } from '../constants/options.js';

class EventPlanner {
  #visitDate;

  #order;

  constructor(visitDate, order) {
    this.#visitDate = visitDate;
    this.#order = order;
  }

  getPreDiscount() {
    const orders = this.#order.getOrders();
    const preDiscount = Array.from(orders).reduce(
      (acc, [menu, quantity]) => acc + MENU[menu] * quantity,
      0,
    );

    return preDiscount;
  }

  getGiveaway() {
    const preDiscount = this.getPreDiscount();

    if (preDiscount >= THRESHOLDS.giveaway) return GIVEAWAY;
    return OPTIONS.none;
  }
}

export default EventPlanner;
