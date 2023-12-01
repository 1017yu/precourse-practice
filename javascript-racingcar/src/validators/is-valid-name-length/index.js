import { NAME_OPTIONS } from '../../constants/options.js';
import SYMBOLS from '../../constants/symbols.js';

const isValidNameLength = (input) => {
  const carNames = input.split(SYMBOLS.comma);

  return carNames.every(
    (carName) =>
      carName.length <= NAME_OPTIONS.max && carName.length >= NAME_OPTIONS.min
  );
};

export default isValidNameLength;
