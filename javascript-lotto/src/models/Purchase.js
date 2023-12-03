import { OPTION } from '../constants/options.js';
import AppError from '../errors/AppError.js';
import { isValidNumber, isValidPurchaseUnit } from '../validators/index.js';

class Purchase {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getPurchaseQuantity() {
    return this.#calculatePurchaseAmount();
  }

  #calculatePurchaseAmount() {
    return Number(this.#purchaseAmount) / OPTION.purchaseUnit;
  }

  #validate(amount) {
    if (!isValidNumber(amount) || !isValidPurchaseUnit(amount)) {
      throw AppError.invalidPurchaseAmount();
    }
  }
}

export default Purchase;
