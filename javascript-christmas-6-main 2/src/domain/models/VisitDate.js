import { isValidDate, isValidNumber } from '../../../validators/index.js';
import AppError from '../../errors/AppError.js';

class VisitDate {
  constructor(dateInput) {
    this.visitDate = dateInput;
    this.#validate();
  }

  #validate() {
    if (!isValidDate(this.visitDate) || !isValidNumber(this.visitDate)) {
      throw AppError.inValidDate();
    }
  }

  get() {
    return this.visitDate;
  }
}

export default VisitDate;
