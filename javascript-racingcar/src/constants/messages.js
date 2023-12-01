import SYMBOLS from './symbols.js';

export const OUTPUT = Object.freeze({
  result: '실행 결과',
});

export const INPUT = Object.freeze({
  carName: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${SYMBOLS.comma}) 기준으로 구분)\n`,
  attempts: `시도할 횟수는 몇 회인가요?\n`,
});

export const ERROR = Object.freeze({
  prefix: '[ERROR]',
  nameLength: '자동차 이름은 5자 이하만 가능합니다.',
  attempts: '시도할 횟수는 1 이상 숫자 형식만 가능합니다.',
});
