import { isValidLength } from '../index.js';

describe('isValidLength 유효성 판별 함수 테스트', () => {
  test.each([
    [[1, 2, 3], true],
    [[3, 4, 5], true],
    [[1, 2], false],
    [[1, 2, 3, 4, 5], false],
  ])(
    '배열의 길이가 3이면 true, 그렇지 않으면 false를 반환한다.',
    (input, expected) => {
      expect(isValidLength(input)).toBe(expected);
    }
  );
});
