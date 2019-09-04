//typeAssertions=example.ts
let str , num;
str = "Hello World";
num = 1234
let lowerCase1 = (<string>str).toLowerCase();
let lowerCase2 = (str as string).toLowerCase();
let convertTostring = (num as number).toString();
