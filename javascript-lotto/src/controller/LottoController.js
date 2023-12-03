import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import lottoGenerator from '../utils/lottoGenerator.js';
import SYMBOLS from '../constants/symbols.js';
import BonusNumberValidator from '../validators/BonusNumber.js';

class LottoController {
  #purchase;

  #domain;

  constructor(purchase, domain) {
    this.#purchase = purchase;
    this.#domain = domain;
  }

  async controll() {
    await this.#readPurchaseAmount();
    const lottos = this.#printPurchasedLottos();
    const winningNumbers = await this.#readWinningNumbers(lottos);
    const bonusNumber = await this.#readBonusNumber(winningNumbers);
    this.#printStats(bonusNumber);
  }

  async #readPurchaseAmount() {
    try {
      const purchaseAmount = await InputView.purchaseAmount();

      this.#purchase = new this.#purchase(purchaseAmount);
    } catch ({ message }) {
      OutputView.print(message);
      return await this.#readPurchaseAmount();
    }
  }

  #printPurchasedLottos() {
    const purchaseQuantity = this.#purchase.getPurchaseQuantity();
    const lottos = lottoGenerator.getLottos(purchaseQuantity);

    OutputView.printPurchaseQuantity(purchaseQuantity);
    OutputView.printLotto(lottos);

    return lottos;
  }

  async #readWinningNumbers(lottos) {
    const { comma } = SYMBOLS;
    try {
      const winningNumbers = (await InputView.winningNumbers()).split(comma);
      this.#domain = new this.#domain(lottos, winningNumbers);

      return winningNumbers;
    } catch ({ message }) {
      OutputView.print(message);
      return await this.#readWinningNumbers();
    }
  }

  async #readBonusNumber(winningNumbers) {
    try {
      const bonusNumber = BonusNumberValidator(
        await InputView.bonusNumber(),
        winningNumbers
      );

      return bonusNumber;
    } catch ({ message }) {
      OutputView.print(message);
      return await this.#readBonusNumber(winningNumbers);
    }
  }

  #printStats(bonusNumber) {
    const stats = this.#domain.getStats(bonusNumber);
    const profitRatio = this.#domain.getProfitRatio(stats);

    OutputView.printResult();
    OutputView.printStats(stats);
    OutputView.printProfitRatio(profitRatio);
  }
}

export default LottoController;
