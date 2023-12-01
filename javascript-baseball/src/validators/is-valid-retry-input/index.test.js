import { isValidRetryInput } from '../index.js';

describe('isValidRetryInput 유효성 판별 함수 테스트', () => {
  test.each([
    ['1', true],
    ['2', true],
    ['3', false],
    ['1a', false],
  ])(
    '지정한 게임 재시작 입력이면 true, 그렇지 않으면 false를 반환한다.',
    (input, expected) => {
      expect(isValidRetryInput(input)).toBe(expected);
    }
  );
});
