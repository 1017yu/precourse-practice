import { ERROR } from '../constants/messages.js';

class AppError extends Error {
  constructor(message) {
    super(`${ERROR.prefix} ${message}`);
  }

  static invalidPurchaseAmount() {
    return new AppError(ERROR.amount);
  }

  static invalidNumber() {
    return new AppError(ERROR.number);
  }

  static invalidLength() {
    return new AppError(ERROR.length);
  }

  static invalidBonusNumber() {
    return new AppError(ERROR.bonusNumber);
  }
}

export default AppError;
