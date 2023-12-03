import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/options.js';

const lottoGenerator = {
  /**
   * 1부터 45 사이의 무작위 6개의 수가 담긴 로또 배열 반환
   * @returns {number[]}
   */
  generateLotto() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.length
    ).sort((current, next) => current - next);
  },

  getLottos(purchaseAmount) {
    const lottos = [];

    while (purchaseAmount) {
      lottos.push(this.generateLotto());
      purchaseAmount -= 1;
    }

    return lottos;
  },
};

export default lottoGenerator;
