class Car {
  private make: string = "Nissan";

  getMake(): string {
    return this.make;
  }
}

const myCar = new Car();

console.log(myCar.getMake());
