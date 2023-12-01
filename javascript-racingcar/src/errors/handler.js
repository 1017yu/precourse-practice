import AppError from './AppError.js';

const ErrorHandler = (message) => {
  throw new AppError(message);
};

export default ErrorHandler;
