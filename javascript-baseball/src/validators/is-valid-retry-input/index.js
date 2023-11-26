import { GAME_OPTION } from '../../constants/options.js';

const isValidRetryInput = (input) => {
  return input === GAME_OPTION.retry || input === GAME_OPTION.end;
};

export default isValidRetryInput;
