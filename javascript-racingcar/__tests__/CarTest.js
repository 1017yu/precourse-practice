import { ERROR } from '../src/constants/messages.js';
import Car from '../src/domain/Car.js';

describe('Car 도메인 클래스 테스트', () => {
  test('1자 미만 5자 초과의 자동차 이름을 입력하면, 에러메시지를 반환한다.', () => {
    // given
    const inputs = ['', 'javajigi'];

    // when && then
    inputs.forEach((carName) => {
      expect(() => new Car(carName)).toThrow(ERROR.nameLength);
    });
  });

  test('고유하지 않은 자동차 이름을 입력하면, 에러메시지를 반환한다.', () => {
    // given
    const input = ['pobi,pobi', 'woni,woni,woni'];

    // when && then
    input.forEach((value) => {
      expect(() => new Car(value)).toThrow(ERROR.uniqueName);
    });
  });

  test('유효한 자동차 이름 입력 값을 주입하면, 배열에 나누어 반환한다.', () => {
    // given
    const input = 'pobi,woni';

    // when
    const instance = new Car(input);
    const expected = ['pobi', 'woni'];

    // then
    expect(instance.getNames()).toEqual(expected);
  });
});
