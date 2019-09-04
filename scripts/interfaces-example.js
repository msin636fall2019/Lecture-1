var alfred = {
    age: 40,
    name: 'Alfred'
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving a car');
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle() {
    }
    Bicycle.prototype.drive = function () {
        console.log('driving a bike');
    };
    return Bicycle;
}());
console.log(alfred);
var car = new Car();
var bike = new Bicycle();
console.log(car.drive());
console.log(bike.drive());
