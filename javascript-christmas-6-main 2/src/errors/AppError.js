import { ERROR_MESSAGES } from '../constants/messages.js';

class AppError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGES.prefix} ${message}`);
  }

  static inValidDate() {
    return new AppError(ERROR_MESSAGES.date);
  }

  static invalidOrder() {
    return new AppError(ERROR_MESSAGES.order);
  }
}

export default AppError;
