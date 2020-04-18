'use strict';
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems = function () {
    return this.items;
  };
  addItem = function (item) {
    this.items.push(item);
  };
  removeItem = function (item) {
    if (this.items.indexOf(item) !== -1) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  };
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
