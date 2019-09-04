//methods-example.ts
class Car {

  constructor( private num: number) {
  }

  printNum(){
    console.log(this.num);
  }
}

class person {
  private firstName: string;

  constructor(theFirstName: string){
    this.firstName = theFirstName;
  }

  showInfo():void {
    console.log('This is '+this.firstName);
  }
} 

let benz = new Car(1);
benz.printNum();


var alfred = new person('Alfred');
alfred.showInfo();
