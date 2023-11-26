import { NUMBER } from './options.js';

const ERROR_MESSAGES = Object.freeze({
  prefix: '[ERROR]',
  number: '입력은 숫자 형식이어야 합니다.',
  length: `입력은 ${NUMBER.length}자리이어야 합니다. (ex: 123)`,
});

export default ERROR_MESSAGES;
