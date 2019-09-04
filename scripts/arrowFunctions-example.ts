//arrowFunctions-example.ts
var double = x => x * 2;      //For one argument x, return x*2
var add = (x, y) => x + y;     //For two argument wrapped with () 

var addAndDouble = (x, y) => { // For more than one statement wrap with {}
  var sum = x + y;
  return sum * 2;
}

