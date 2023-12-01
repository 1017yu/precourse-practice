import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR } from '../src/constants/messages.js';
import Racing from '../src/domain/Racing.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Racing 도메인 클래스 테스트', () => {
  test('시도할 횟수 입력이 올바른 숫자 형식이 아니라면, 에러를 반환한다.', () => {
    // given
    const inputs = ['a', '1000a', '!@#', '0'];

    // when && then
    inputs.forEach((attempts) => {
      expect(() => new Racing(attempts)).toThrow(ERROR.attempts);
    });
  });

  test('move() 메소드를 호출하면, 경주 결과가 담긴 스코어보드를 반환한다.', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const outputs = ['pobi : 1'];
    const randoms = [MOVING_FORWARD, STOP];

    mockRandoms([...randoms]);

    // when
    const racing = new Racing('1');
    racing.move(['pobi', 'woni']);

    // then
    expect(racing.getScoreBoard().get('pobi')).toBe(1);
  });
});
