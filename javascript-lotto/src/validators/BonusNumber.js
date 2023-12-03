import AppError from '../errors/AppError.js';
import { isValidLottoNumber } from './index.js';

const BonusNumberValidator = (bonusNumber, winningNumbers) => {
  if (!isValidLottoNumber([bonusNumber])) throw AppError.invalidNumber();
  if (winningNumbers.includes(bonusNumber)) throw AppError.invalidBonusNumber();

  return bonusNumber;
};

export default BonusNumberValidator;
