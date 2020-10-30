class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    if (this.speed <= 0) return;

    this.speed -= 5;
    console.log(`${this.make} going ${this.speed}`);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going ${this.speed}`);
  }

  get speedMPH() {
    return this.speed / 1.6;
  }

  // we only need to use _VariableName when method name === property name
  set speedMPH(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new Car('bmw', 120);

console.log(bmw.speedMPH);

bmw.accelerate();
bmw.speedMPH = 80;
console.log(bmw.speedMPH);
