// unlimitesArgsFunctions-example.ts
function greeting(msg: string, ...names: string[]): string {
  return greeting + '' + names.join(' and ') + '!';

}
console.log(greeting('Hello', 'John', 'Alfred', 'Albert', 'Sophia'));
