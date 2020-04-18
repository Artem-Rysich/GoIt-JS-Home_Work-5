'use strict';
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    return (this._value = this.value + str);
  }
  prepend(str) {
    return (this._value = str + this.value);
  }
  pad(str) {
    return (this._value = str + this.value + str);
  }
}
const builder = new StringBuilder('.');
console.log(builder._value);
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='