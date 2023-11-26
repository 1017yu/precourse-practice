import { NUMBER } from '../../src/constants/options.js';
import Opponent from '../../src/domain/Opponent.js';

describe('Opponent 도메인 테스트', () => {
  test('getRandomNumberSet() 메소드를 호출하면, 길이가 3인 배열을 반환한다', () => {
    // given
    const answer = NUMBER.length;

    // when
    const randomNumberSet = new Opponent().getRandomNumberSet();

    // then
    expect(randomNumberSet.length).toBe(answer);
  });

  test('getRandomNumberSet() 메소드를 호출하면, 1부터 9 사이의 요소를 가진 배열을 반환한다.', () => {
    // given
    const rNumberRegexp = /^[1-9]$/;

    // when
    const randomNumberSet = new Opponent().getRandomNumberSet();

    // then
    randomNumberSet.forEach((number) => {
      expect(rNumberRegexp.test(number)).toBe(true);
    });
  });
});
