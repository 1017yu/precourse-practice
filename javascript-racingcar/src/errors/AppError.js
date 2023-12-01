import { ERROR } from '../constants/messages.js';

class AppError extends Error {
  constructor(message) {
    super(`${ERROR.prefix} ${message}`);
  }
}

export default AppError;
