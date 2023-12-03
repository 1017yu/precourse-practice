import { LOTTO } from '../../constants/options.js';

const isValidLottoNumber = (input) => {
  return input.every((number) => {
    return number >= LOTTO.minNumber && number <= LOTTO.maxNumber;
  });
};

export default isValidLottoNumber;
