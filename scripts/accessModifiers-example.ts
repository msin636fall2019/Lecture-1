//accessModifiers-example.ts
class Car {
  private num: number;

  constructor(num: number) {
    this.num = num;
  }

  printNum(){
    console.log(this.num);
  }
}

var benz = new Car(1);
benz.num = 1  // will give an error 
