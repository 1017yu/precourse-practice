import { isValidOrder } from '../../../validators/index.js';
import SYMBOLS from '../../constants/symbols.js';
import AppError from '../../errors/AppError.js';
import splitter from '../../utils/splitter.js';

class Order {
  #orderList = new Map();

  constructor(orderInput) {
    this.order = orderInput;
    this.#validate();
  }

  getOrders() {
    splitter(this.order, SYMBOLS.comma).forEach(value => {
      const [menu, quantity] = splitter(value, SYMBOLS.dash);

      this.#orderList.set(menu, quantity);
    });

    return this.#orderList;
  }

  getMenus() {
    return this.#orderList.keys();
  }

  #validate() {
    if (!isValidOrder(this.order)) {
      throw AppError.invalidOrder();
    }
  }
}

export default Order;
