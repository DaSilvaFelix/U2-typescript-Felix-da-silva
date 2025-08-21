class Car {
  make: string = "Nissan";

  drive(): string {
    return `Driving a ${this.make}`;
  }
}

const myCar = new Car();

console.log(myCar.drive());
