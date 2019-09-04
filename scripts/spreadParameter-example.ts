// spreadParameter-example.ts
var newItem = 3;
var oldArray = [1,2];
var newArray = [...oldArray, newItem];
console.log(newArray);


var person1 = {name:'chris'};
var person2 = {...person1, age:37}
console.log(person1);
console.log(person2);
