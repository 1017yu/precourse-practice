import { LOTTO } from '../../constants/options.js';

const isValidLottoLength = (input) => {
  return new Set(input).size === LOTTO.length;
};

export default isValidLottoLength;
