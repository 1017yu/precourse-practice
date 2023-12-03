import { EOL as LINE_SEPERATOR } from 'os';

export const INPUT = Object.freeze({
  purchaseAmount: `구입금액을 입력해 주세요.${LINE_SEPERATOR}`,
});

export const OUTPUT = Object.freeze({});

export const ERROR = Object.freeze({
  prefix: '[ERROR]',
  number: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
});
