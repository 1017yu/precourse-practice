import AppError from './AppError.js';

const errorHandler = (message) => {
  throw new AppError(message);
};

export default errorHandler;
