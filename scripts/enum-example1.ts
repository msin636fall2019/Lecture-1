//enum-example1.ts
enum Brands { Ford, Chevy, Buick, BMW}
var myCar: Brands = Brands.BMW    //assign 3 to myCar
var myCar: string = Brands[3]    //return 'BMW'    
console.log(myCar)
