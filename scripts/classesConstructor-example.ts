class Car{
  public make: string;
  private model: string
  constructor(make:string, model: string){
    this.make = make;
    this.model = model;
  }
}

var myCar = new Car('MB', 'C300');

class Cars {
  constructor(public make:string , private model: string){};
}

var car = new Cars('Ferrari','F40');
car.make //Ferari 
car.model //not allowed
