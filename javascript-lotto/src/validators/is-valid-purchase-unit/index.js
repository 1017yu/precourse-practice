import { OPTION } from '../../constants/options.js';

const isValidPurchaseUnit = (input) => {
  const rest = input % OPTION.purchaseUnit;

  return input > 0 && !rest;
};

export default isValidPurchaseUnit;
