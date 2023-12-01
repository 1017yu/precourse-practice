import { BALL_COUNT } from '../../constants/options.js';

const isValidLength = (input) => {
  return input.length === BALL_COUNT.length;
};

export default isValidLength;
