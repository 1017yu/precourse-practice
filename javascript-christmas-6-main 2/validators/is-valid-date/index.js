import { OPTIONS } from '../../src/constants/options.js';

const isValidDate = input =>
  input >= OPTIONS.startDate && input <= OPTIONS.endDate;

export default isValidDate;
