var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// spreadParameter-example.ts
var newItem = 3;
var oldArray = [1, 2];
var newArray = oldArray.concat([newItem]);
console.log(newArray);
var person1 = { name: 'chris' };
var person2 = __assign({}, person1, { age: 37 });
console.log(person1);
console.log(person2);
