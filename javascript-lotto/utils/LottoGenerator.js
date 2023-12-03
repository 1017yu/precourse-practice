import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../src/constants/options.js';

/**
 * 1부터 45 사이의 무작위 6개의 수가 담긴 로또 배열 반환
 * @returns {number[]}
 */
const LottoGenerator = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTO.minNumber,
    LOTTO.maxNumber,
    LOTTO.length
  ).sort((current, next) => current - next);
};

export default LottoGenerator;
