import { rNumber } from '../../constants/options.js';

const isValidAttempts = (input) => {
  return rNumber.test(input);
};

export default isValidAttempts;
