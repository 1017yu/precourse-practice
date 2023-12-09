import { MENU } from '../constants/menus.js';

class EventPlanner {
  #visitDate;

  #order;

  constructor(visitDate, order) {
    this.#visitDate = visitDate;
    this.#order = order;
  }

  getPreDiscount() {
    const orders = this.#order.getOrders();
    return orders.reduce(
      (acc, { menu, quantity }) => acc + MENU[menu] * quantity,
      0,
    );
  }
}

export default EventPlanner;
