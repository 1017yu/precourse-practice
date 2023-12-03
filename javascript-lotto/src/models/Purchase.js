import { OPTION } from '../constants/options.js';
import AppError from '../errors/AppError.js';
import { isValidNumber, isValidPurchaseUnit } from '../validators/index.js';

class Purchase {
  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  getPurchaseAmount() {
    return Number(this.purchaseAmount) / OPTION.purchaseUnit;
  }

  #validate(amount) {
    if (!isValidNumber(amount) || !isValidPurchaseUnit(amount)) {
      throw AppError.invalidNumber();
    }
  }
}

export default Purchase;
