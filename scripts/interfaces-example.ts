//interfaces-example.ts
interface Person {
  name: string;
  age: number;
}

const alfred: Person = {
  age: 40,
  name:'Alfred'  
};

interface Vehicle {
  drive():any;
}

class Car implements Vehicle{
  drive():void{
    console.log('driving a car'); 
  }
}

class Bicycle implements Vehicle{
  drive():void{
    console.log('driving a bike'); 
  }
}

console.log(alfred);

const car = new Car();
const bike = new Bicycle();

console.log(car.drive());
console.log(bike.drive());
