import isValidLottoNumber from './number.js';

describe('isValidLottoLength() 유효성 판별 함수 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 45], true],
    [[1, 2, 3, 4, 5, 46], false],
    [[0, 2, 3, 4, 5, 46], false],
    [[1, 2, 3, 4, 5, 6, '7a'], false],
  ])(
    '당첨 번호가 1부터 45사이의 숫자라면, true를 반환한다.',
    (input, expected) => {
      expect(isValidLottoNumber(input)).toBe(expected);
    }
  );
});
