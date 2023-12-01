import isValidAttempts from './index.js';

describe('isValidAttempts() 유효성 함수 테스트', () => {
  test.each([
    ['3', true],
    ['0', false],
    ['a', false],
    ['a', false],
    ['3a', false],
    ['1 3', false],
  ])('유효한 시도 횟수 입력이면, true를 반환한다.', (input, expected) => {
    expect(isValidAttempts(input)).toBe(expected);
  });
});
