import { DRINKS, MENU } from '../../src/constants/menus.js';
import SYMBOLS from '../../src/constants/symbols.js';
import isValidNumber from '../is-valid-number/index.js';
import splitter from '../../src/utils/splitter.js';

const isValidMenu = orderList => {
  const menus = Array.from(orderList.keys());

  return (
    menus.every(menu => Object.keys(MENU).includes(menu)) &&
    !menus.every(menu => DRINKS.drink.includes(menu))
  );
};

const isValidQuantity = orderList => {
  const quantities = Array.from(orderList.values());

  return (
    quantities.every(quantity => isValidNumber(quantity)) &&
    quantities.reduce((acc, quantity) => acc + Number(quantity), 0) <= 20
  );
};

const isValidOrder = input => {
  const orderList = new Map();
  const order = splitter(input, SYMBOLS.comma);

  order.forEach(value => {
    const [menu, quantity] = splitter(value, SYMBOLS.dash);

    orderList.set(menu, quantity);
  });
  return isValidMenu(orderList) && isValidQuantity(orderList);
};

export default isValidOrder;
