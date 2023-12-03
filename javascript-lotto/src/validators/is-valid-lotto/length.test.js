import isValidLottoLength from './length.js';

describe('isValidLottoLength() 유효성 판별 함수 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], true],
    [[1, 2, 3, 4, 5, 5], false],
    [[1, 2], false],
    [[1, 2, 3, 4, 5, 6, 7], false],
  ])(
    '당첨 번호가 고유한 6개의 숫자이면, true를 반환한다.',
    (input, expected) => {
      expect(isValidLottoLength(input)).toBe(expected);
    }
  );
});
