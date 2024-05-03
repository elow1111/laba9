// BEGIN
export class Money {
  constructor(value, currency = 'usd') {
      this.value = value;
      this.currency = currency;
  }

  getValue() {
      return this.value;
  }

  getCurrency() {
      return this.currency;
  }

  exchangeTo(currency) {
      const exchangeRates = {
          'usd': 1,
          'eur': 0.85, // Примерные курсы обмена для удобства демонстрации
          'gbp': 0.75
          // Добавьте курсы обмена для других валют
      };

      if (!(currency in exchangeRates)) {
          throw new Error('Unsupported currency');
      }

      const newValue = this.value * (exchangeRates[currency] / exchangeRates[this.currency]);
      return new Money(newValue, currency);
  }

  add(money) {
      if (this.currency !== money.getCurrency()) {
          const convertedMoney = money.exchangeTo(this.currency);
          const newValue = this.value + convertedMoney.getValue();
          return new Money(newValue, this.currency);
      } else {
          const newValue = this.value + money.getValue();
          return new Money(newValue, this.currency);
      }
  }

  subtract(money) {
      if (this.currency !== money.getCurrency()) {
          const convertedMoney = money.exchangeTo(this.currency);
          const newValue = this.value - convertedMoney.getValue();
          return new Money(newValue, this.currency);
      } else {
          const newValue = this.value - money.getValue();
          return new Money(newValue, this.currency);
      }
  }

  multiply(factor) {
      const newValue = this.value * factor;
      return new Money(newValue, this.currency);
  }

  divide(divisor) {
      if (divisor === 0) {
          throw new Error('Division by zero');
      }
      const newValue = this.value / divisor;
      return new Money(newValue, this.currency);
  }

  format(options = { style: 'currency' }) {
      return this.value.toLocaleString(undefined, { ...options, currency: this.currency });
  }
}
// END
