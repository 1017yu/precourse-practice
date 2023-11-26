import { isValidNumber } from '../index.js';

describe('isValidNumber 유효성 판별 함수 테스트', () => {
  test.each([
    [[1, 2, 3], true],
    [[3, 4, 5], true],
    [[1.1, 2, 3], false],
    [['1.a', '2', '3'], false],
  ])(
    '배열 내 요소가 유효한 숫자 형식이면 true, 그렇지 않으면 false를 반환한다.',
    (input, expected) => {
      expect(isValidNumber(input)).toBe(expected);
    }
  );
});
