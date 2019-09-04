var Car = /** @class */ (function () {
    function Car(num) {
        this.num = num;
    }
    Car.prototype.printNum = function () {
        console.log(this.num);
    };
    return Car;
}());
var person = /** @class */ (function () {
    function person(theFirstName) {
        this.firstName = theFirstName;
    }
    person.prototype.showInfo = function () {
        console.log('This is ' + this.firstName);
    };
    return person;
}());
var benz = new Car(1);
benz.printNum();
var alfred = new person('Alfred');
alfred.showInfo();
