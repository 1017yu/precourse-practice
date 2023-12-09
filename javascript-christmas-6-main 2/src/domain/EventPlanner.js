import { DESSERTS, GIVEAWAY, MAINS, MENU } from '../constants/menus.js';
import { EVENT_MESSAGES } from '../constants/messages.js';
import { DISCOUNTS, OPTIONS, THRESHOLDS } from '../constants/options.js';
import dayOfWeekFinder from '../utils/dayOfWeekFinder.js';

class EventPlanner {
  #visitDate;

  #order;

  constructor(visitDate, order) {
    this.#visitDate = visitDate;
    this.#order = order;
  }

  getPreDiscount() {
    const orders = this.#order.getOrders();
    const preDiscount = Array.from(orders).reduce(
      (acc, [menu, quantity]) => acc + MENU[menu] * quantity,
      0,
    );

    return preDiscount;
  }

  getGiveaway() {
    const preDiscount = this.getPreDiscount();

    if (preDiscount >= THRESHOLDS.giveaway) return GIVEAWAY;
    return OPTIONS.none;
  }

  getBenefitList() {
    const visitDate = this.#visitDate.get();
    const menus = this.#order.getMenus();
    const isWeekend = dayOfWeekFinder(visitDate) >= THRESHOLDS.weekend;
    const benefitList = new Map();
    const { dDay, weekday, weekend, special, giveaway } = EVENT_MESSAGES;

    benefitList.set(dDay, this.#calculateDdayDiscount(visitDate));
    benefitList.set(
      isWeekend ? weekend : weekday,
      this.#calculateWeekDiscount(menus, isWeekend),
    );
    benefitList.set(special, this.#calculateSpecialDiscount(visitDate));
    benefitList.set(giveaway, this.#calculateGiveawayDiscount());

    return benefitList;
  }

  #calculateDdayDiscount(visitDate) {
    const discountPrice = DISCOUNTS.dDay + (visitDate - 1) * DISCOUNTS.dDayUnit;

    return visitDate <= OPTIONS.christmas ? discountPrice : 0;
  }

  #calculateWeekDiscount(menus, isWeekend) {
    if (isWeekend) {
      return this.#filterApplyMenus(Array.from(menus), MAINS) * DISCOUNTS.week;
    }

    return this.#filterApplyMenus(Array.from(menus), DESSERTS) * DISCOUNTS.week;
  }

  #filterApplyMenus(menus, category) {
    return menus.filter(menu => category.includes(menu)).length;
  }

  #calculateSpecialDiscount(visitDate) {
    const isSpecialDay =
      dayOfWeekFinder(visitDate) === OPTIONS.sunday ||
      visitDate === OPTIONS.christmas;

    return isSpecialDay ? DISCOUNTS.special : 0;
  }

  #calculateGiveawayDiscount() {
    return this.getGiveaway() === GIVEAWAY ? MENU[GIVEAWAY] : 0;
  }
}

export default EventPlanner;
