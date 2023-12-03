import LottoGenerator from '../../utils/LottoGenerator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #purchase;

  constructor(purchase) {
    this.#purchase = purchase;
  }

  async controll() {
    await this.#readPurchaseAmount();
    this.#printPurchasedLottos();
  }

  async #readPurchaseAmount() {
    try {
      const purchaseAmountInput = await InputView.purchaseAmount();
      this.#purchase = new this.#purchase(purchaseAmountInput);
    } catch ({ message }) {
      OutputView.print(message);
      await this.#readPurchaseAmount();
    }
  }

  #printPurchasedLottos() {
    let purchaseAmount = this.#purchase.getPurchaseAmount();
    OutputView.printPurchaseAmount(purchaseAmount);

    while (purchaseAmount) {
      OutputView.print(LottoGenerator());
      purchaseAmount -= 1;
    }
  }
}

export default LottoController;
