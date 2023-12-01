import SYMBOLS from '../constants/symbols.js';

class Prize {
  #scoreboard;

  constructor(scoreBoard) {
    this.#scoreboard = scoreBoard;
  }

  getWinners() {
    return this.#calculateWinners(this.#scoreboard);
  }

  #calculateWinners(scoreBoard) {
    const maxScore = Math.max(...scoreBoard.values());

    return Array.from(scoreBoard)
      .filter(([_, score]) => score === maxScore)
      .map(([carName]) => carName)
      .join(SYMBOLS.commaWithSpace);
  }
}

export default Prize;
