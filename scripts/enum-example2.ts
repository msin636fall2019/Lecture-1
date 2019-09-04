//enum-example2.ts

enum weekDay { Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday }
var dayOff: weekDay = weekDay.Saturday;

enum week {sunday=1, monday, tuesday, wednesday, thursday, friday, saturday}
var day_Off:week =week.wednesday     //assign 4 to dayOff

console.log(dayOff);                 //print the index  - 5
console.log(weekDay[dayOff]);        //print the day    - saturday
