import { OPTION } from './constants/options.js';
import { INDEX_TABLE, MATCHES, WINNINGS } from './constants/prizes.js';
import AppError from './errors/AppError.js';
import { isValidLottoNumber, isValidLottoLength } from './validators/index.js';

class Lotto {
  #numbers;

  constructor(userLottos, numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.userLottos = userLottos;
  }

  getLotto() {
    return this.#numbers;
  }

  getStats(bonusNumber) {
    const stats = Array.from({ length: 5 }, () => 0);

    return this.#calculateStats(bonusNumber, stats);
  }

  getProfitRatio(stats) {
    const profitRatio = this.#calculateProfitRatio(stats);

    return profitRatio.toFixed(1);
  }

  #calculateStats(bonusNumber, stats) {
    this.userLottos.forEach((userLotto) => {
      const matches = this.#countMatches(userLotto, this.#numbers);
      if (matches === MATCHES.fifth) return (stats[INDEX_TABLE.fifth] += 1);
      if (matches === MATCHES.fourth) return (stats[INDEX_TABLE.fourth] += 1);
      if (matches === MATCHES.fifth) {
        return this.#checkSecond(userLotto, bonusNumber, stats);
      }
      if (matches === MATCHES.first) return (stats[INDEX_TABLE.first] += 1);
    });

    return stats;
  }

  #countMatches(userLotto, winningNumbers) {
    let matches = 0;

    userLotto.forEach((number) => {
      if (winningNumbers.includes(number.toString())) matches += 1;
    });

    return matches;
  }

  #checkSecond(userLotto, bonusNumber, stats) {
    const hasBonusNumber = userLotto.includes(bonusNumber);

    return hasBonusNumber
      ? (stats[INDEX_TABLE.second] += 1)
      : (stats[INDEX_TABLE.third] += 1);
  }

  //
  #calculateProfitRatio(stats) {
    const totalWinnings = Object.values(WINNINGS).reduce(
      (acc, winning, index) => {
        acc + stats[index] * winning, 0;
      }
    );

    return (
      (totalWinnings * 100) / (this.userLottos.length * OPTION.purchaseUnit)
    );
  }

  #validate(numbers) {
    if (!isValidLottoLength(numbers)) {
      throw AppError.invalidLength();
    }
    if (!isValidLottoNumber(numbers)) {
      throw AppError.invalidNumber();
    }
  }
}

export default Lotto;
