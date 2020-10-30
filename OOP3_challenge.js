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

const EV = function (make, speed, batteryLevel) {
  // make this point to object created from EV constructor
  Car.call(this, make, speed);

  this.batteryLevel = batteryLevel;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeTo = function (newBatteryLevel) {
  this.batteryLevel = newBatteryLevel;
};

// POLYMORPHISM
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.batteryLevel -= 1;

  console.log(
    `${this.make} going ${this.speed} km/h w battery ${this.batteryLevel}%`
  );
};

const tesla = new EV('tesla', 100, 90);

tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.chargeTo(99);
tesla.accelerate();
