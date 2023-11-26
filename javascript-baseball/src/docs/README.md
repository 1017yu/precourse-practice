# ⚾️ 숫자 야구

## 컨트롤러

### BaseBallGame.js

최초 Application 실행 시, 생성자를 통해 `intro`를 출력합니다.

이후 호출된 `controll()` 메소드가 전체 숫자야구 게임을 컨트롤합니다.

`#start()`, `#end()` 메소드를 통해 게임 시작과 종료(재시작)을 관리합니다.

## 도메인

### Opponent.js

상대방(🖥️ 컴퓨터)의 로직을 담당하는 도메인입니다.

- 애플리케이션이 실행되고 컨트롤러가 `Opponent`의 `getRandomNumberSet()`을 호출하여 상대방의 1~9 이내의 무작위 3개의 숫자가 담긴 배열을 반환받습니다.

- public method `getRandomNumberSet()`가 단순히 배열만 반환하지 않고 일할 수 있도록 private method를 호출하며 배열을 반환하도록 구성하였습니다.

### Umpire.js

상대방(🖥️ 컴퓨터)의 정답 번호 배열과 사용자 입력을 기준으로 볼카운트 및 유저 승리 로직 담당 도메인입니다.

- 생성자를 통해 사용자의 문자열 입력을 배열로 변환 후 유효성을 판별합니다.

- `ballcount()` public method는 `#caculateBallcount()` 메소드를 통해 스트라이크와 볼 수를 계산하고, `1볼 1스트라이크`와 같은 볼카운트 메시지를 반환합니다.

- `ballcount()` 메소드를 통해 컨트롤러는 볼카운트를 `ballcount` 변수에 할당합니다.이후 변수 값을 `isPlayerWin()` 메소드에 넘겨 유저가 승리 조건을 충족했는지 판별 후 결과를`boolean`으로 반환합니다.
