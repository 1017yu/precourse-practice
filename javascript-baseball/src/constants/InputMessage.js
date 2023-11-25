import { EOL as LINE_SEPARATOR } from 'os';

const INPUT_MESSAGE = Object.freeze({
  number: '숫자를 입력해주세요 : ',
  retry: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.${LINE_SEPARATOR}`,
});

export default INPUT_MESSAGE;
