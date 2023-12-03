import isValidNumber from './index.js';

describe('isValidNumber 유효성 판별 함수 테스트', () => {
  test.each([
    ['1', true],
    ['1000', true],
    ['1000.3', false],
    ['1a', false],
    ['lotto', false],
  ])('올바른 숫자 형태라면, true를 반환한다.', (input, expected) => {
    expect(isValidNumber(input)).toBe(expected);
  });
});
