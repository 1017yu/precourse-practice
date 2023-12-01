import isUniqueName from './index.js';

describe('isUniqueName() 유효성 함수 테스트', () => {
  test.each([
    ['pobi,woni', true],
    ['pobi,pobi', false],
  ])('입력한 자동차 이름이 고유하면, true를 반환한다.', (input, expected) => {
    expect(isUniqueName(input)).toBe(expected);
  });
});
