import ERROR_MESSAGES from '../../src/constants/errorMessages.js';
import Umpire from '../../src/domain/Umpire.js';

describe('Umpire 도메인 테스트', () => {
  test('3개 미만이거나 초과하는 숫자 입력이라면, 정해진 에러 메시지를 발생시킨다.', () => {
    // given
    const playerInput = ['12', '1234'];

    // when && then
    playerInput.forEach((input) => {
      expect(() => new Umpire(input)).toThrow(ERROR_MESSAGES.length);
    });
  });

  test('숫자 형식이 아닌 입력이라면, 정해진 에러 메시지를 발생시킨다.', async () => {
    // given
    const playerInput = ['12a', '123.4'];

    // when && then
    playerInput.forEach(async (input) => {
      expect(() => new Umpire(input)).toThrow(ERROR_MESSAGES.number);
    });
  });

  test('올바른 숫자 입력이라면, 에러를 발생시키지 않는다.', () => {
    // given
    const playerInput = ['123', '789'];

    // when && then
    playerInput.forEach(async (input) => {
      expect(async () => {
        await new Umpire(input);
      }).not.toThrow();
    });
  });

  test('유저 승리 조건이라면, isPlayerWin() 메소드는 true를 반환한다.', () => {
    // given
    const ballcount = '3스트라이크';

    // when
    const playerWin = true;

    // then
    expect(new Umpire('123').isPlayerWin(ballcount)).toBe(playerWin);
  });

  test('유저 승리 조건이 아니라면, isPlayerWin() 메소드는 false를 반환한다.', () => {
    // given
    const ballcount = '2스트라이크';

    // when
    const playerWin = false;

    // then
    expect(new Umpire('123').isPlayerWin(ballcount)).toBe(playerWin);
  });
});
