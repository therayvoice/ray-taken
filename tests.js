const taken = require('./ray-taken.js');

Args = ["abcd", 1234, 12345, "abcde", "abc", 12, function x(){console.log("kle")}, function y(){console.log("Hale")}, {name:"ry", age:25}, {name:"anna", age:27}];

ArgsB = [12345, "abcd", "abc", "Hale", "abcde"];

/*
const newArgs = taken
  .take(Args)
  .getArgsOfType("number")
  .value;

console.log(newArgs);
*/ // Works as intended

/*
const newArgs = taken
  .take(Args)
  .getArgsOfType("string")
  .union(ArgsB)
  .value;

console.log(newArgs);
*/ //working as intended

/*
const newArgs = taken
  .take(Args)
  .intersection(ArgsB)
  .value;

console.log(newArgs);
*/ // working as intended

/*
const newArgs = taken
  .take(Args)
  .subtraction(ArgsB)
  .value;

console.log(newArgs);
*/ //working as intended

/*
const newArgs = taken
  .take(Args)
  .getArgsOfRegex(/^([0-9]{4})/)
  .value;

console.log(newArgs);
*/


const newArgs = taken
  .take(Args)
  .getPortNums()
  .value;

console.log(newArgs);




