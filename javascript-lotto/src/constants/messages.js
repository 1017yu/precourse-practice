import { EOL as LINE_SEPERATOR } from 'os';
import { OPTION } from './options.js';
import { WINNINGS } from './prizes.js';

export const INPUT = Object.freeze({
  purchaseAmount: `구입금액을 입력해 주세요.${LINE_SEPERATOR}`,
  winningNumbers: `${LINE_SEPERATOR}당첨 번호를 입력해 주세요.${LINE_SEPERATOR}`,
  bonusNumber: `${LINE_SEPERATOR}보너스 번호를 입력해 주세요.${LINE_SEPERATOR}`,
});

export const OUTPUT = Object.freeze({
  purchase: `개를 구매했습니다.`,
  stats: `당첨 통계`,
  dash: `---`,
  profitRatio: (ratio) => `총 수익률은 ${ratio}%입니다.`,
});

export const ERROR = Object.freeze({
  prefix: '[ERROR]',
  amount: `구입 금액은 ${OPTION.purchaseUnit}원 단위여야 합니다.`,
  number: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  length: '로또 번호는 중복되지 않는 6개의 숫자이어야 합니다.',
  bonusNumber: '보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
});

export const STATS = [
  `3개 일치 (${WINNINGS.fifth.toLocaleString()}원) -`,
  `4개 일치 (${WINNINGS.fourth.toLocaleString()}원) -`,
  `5개 일치 (${WINNINGS.third.toLocaleString()}원) -`,
  `5개 일치, 보너스 볼 일치 (${WINNINGS.second.toLocaleString()}원) -`,
  `6개 일치 (${WINNINGS.first.toLocaleString()}원) -`,
];
