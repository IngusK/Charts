import { computed, observable } from 'mobx';

export class Store {
  @observable range = 10

  updateStore(value) {
    this.range = value;
  }
}

export default new Store
