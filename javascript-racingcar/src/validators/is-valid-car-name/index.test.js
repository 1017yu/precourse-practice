import isValidCarName from './index.js';

describe('isValidCarName() 유효성 함수 테스트', () => {
  test.each([
    ['pobi,jun', true],
    ['p,wonij', true],
    ['pobiwonijun', false],
    ['pobi,,woni', false],
    [',', false],
    ['', false],
  ])(
    '입력받은 자동차 이름이 1자 이상 5자 이하라면, true를 반환한다.',
    (input, expected) => {
      expect(isValidCarName(input)).toBe(expected);
    }
  );
});
