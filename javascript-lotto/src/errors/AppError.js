import { ERROR } from '../constants/messages.js';

class AppError extends Error {
  constructor(message) {
    super(`${ERROR.prefix} ${message}`);
  }

  static invalidNumber() {
    return new AppError(ERROR.number);
  }
}

export default AppError;
