const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  if (this.speed <= 0) return;

  this.speed -= 5;

  if (this.speed < 0) this.speed = 0;

  console.log(`${this.make} speed = ${this.speed} km/d`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;

  console.log(`${this.make} speed = ${this.speed} km/d`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
