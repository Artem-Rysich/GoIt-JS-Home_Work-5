class Car {
  constructor({ speed = 0, price, maxSpeed = 0, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  static getSpecs(car) {
    console.log(car);
  }
  get _price() {
    return this._price;
  }
  set _price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      return (this.speed = this.speed - value);
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      return (this.distance = hours * this.speed);
    } else {
      return (this.distance = 0);
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
mustang.decelerate(140);
mustang.turnOff();
mustang.drive(1);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000;