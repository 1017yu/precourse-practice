import Prize from '../src/domain/Prize.js';

describe('Prize 도메인 클래스 테스트', () => {
  test('가장 큰 value를 가진 key가 단일일 경우, 단일 key를 반환한다.', () => {
    // given
    const scoreBoard = new Map([
      ['pobi', 5],
      ['woni', 3],
      ['jun', 1],
    ]);

    // when
    const instance = new Prize(scoreBoard);
    const expected = 'pobi';

    // then
    expect(instance.getWinners()).toEqual(expected);
  });

  test('가장 큰 value를 가진 key가 여러 개일 경우, 다중 key를 반환한다.', () => {
    // given
    const scoreBoard = new Map([
      ['pobi', 5],
      ['woni', 5],
      ['jun', 1],
    ]);

    // when
    const instance = new Prize(scoreBoard);
    const expected = 'pobi, woni';

    // then
    expect(instance.getWinners()).toEqual(expected);
  });
});
