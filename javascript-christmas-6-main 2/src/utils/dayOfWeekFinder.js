import { OPTIONS } from '../constants/options.js';

const dayOfWeekFinder = date => {
  const dateSet = new Date(`${OPTIONS.year}-${OPTIONS.month}-${date}`);

  return dateSet.getDay();
};

export default dayOfWeekFinder;
