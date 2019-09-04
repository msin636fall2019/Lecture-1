//internalModule-example.ts
module Greetings{
  export class Greeting {
    constructor (public name: string){
      console.log(`Hello ${name}`);
    }
  }

  export class XmasGreeting{
    constructor (public name: string){
      console.log(`Merry Xmas ${name}`);
    }
  }
}

import  msg = Greetings.XmasGreeting;
var XmasJoe = new msg('Joe');
