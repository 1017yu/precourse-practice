import isValidPurchaseUnit from './index.js';

describe('구입 금액 단위 유효성 판별 함수 테스트', () => {
  test.each([
    ['1000', true],
    ['5000', true],
    ['0', false],
    ['1001', false],
  ])('구입 금액이 1_000 단위라면, true를 반환한다.', (input, expected) => {
    expect(isValidPurchaseUnit(input)).toBe(expected);
  });
});
