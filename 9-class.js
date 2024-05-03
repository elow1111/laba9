import _ from 'lodash';

// BEGIN
export class Cart {
  constructor() {
      this.items = [];
  }

  addItem(item, count) {
      this.items.push({ item, count });
  }

  removeItem(item) {
      this.items = this.items.filter(cartItem => cartItem.item !== item);
  }

  getItems() {
      return _.cloneDeep(this.items);
  }

  getCost() {
      return this.items.reduce((totalCost, { item, count }) => totalCost + (item.price * count), 0);
  }

  getCount() {
      return this.items.reduce((totalCount, { count }) => totalCount + count, 0);
  }

  getTotalWeight() {
      return this.items.reduce((totalWeight, { item, count }) => totalWeight + (item.weight * count), 0);
  }
};
export default Cart;
// END
