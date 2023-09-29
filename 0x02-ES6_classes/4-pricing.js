// eslint-disable-next-line no-unused-vars
import Currency from "./3-currency";

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number.');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number.');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    const calc = amount * conversionRate;
    return calc;
  }
}

export default Pricing;
