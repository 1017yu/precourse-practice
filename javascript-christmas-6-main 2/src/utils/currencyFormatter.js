import { OPTIONS } from '../constants/options.js';

const currencyFormatter = input => {
  const formattedPrice = new Intl.NumberFormat(OPTIONS.intl).format(input);

  return `${formattedPrice}${OPTIONS.currency}`;
};

export default currencyFormatter;
