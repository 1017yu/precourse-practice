import { BALL_COUNT, GAME_OPTION } from './options.js';

const ERROR_MESSAGES = Object.freeze({
  prefix: '[ERROR]',
  number: '입력은 숫자 형식이어야 합니다.',
  length: `입력은 ${BALL_COUNT.length}자리이어야 합니다. (ex: 123)`,
  retry: `입력은 ${GAME_OPTION.retry} 또는 ${GAME_OPTION.end}이어야 합니다. `,
});

export default ERROR_MESSAGES;
