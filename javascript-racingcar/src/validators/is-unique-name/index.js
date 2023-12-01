import SYMBOLS from '../../constants/symbols.js';

const isUniqueName = (input) => {
  const carNames = input.split(SYMBOLS.comma);

  return new Set(carNames).size === carNames.length;
};

export default isUniqueName;
