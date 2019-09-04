//inheritance-example.ts
class Car {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  printNum() {
    console.log(this.num);
  }
}

class Van extends Car {
  printNum() {
    console.log(this.num + 2);
  }
}

var benz = new Van(1);
