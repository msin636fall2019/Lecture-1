// optionalArgsFunction-example.ts
function greeting(name: string, msg: string = 'Hello'): string {
  return  `${msg} , ${name}`
}

console.log(greeting('Alfred'))        //output " Hello Alfred"
console.log(greeting('Alfred', 'Hi '))  //output " Hi Alfred"
