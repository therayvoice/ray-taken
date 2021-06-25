//const taken = require('./ray-taken.js');
const taken = require('./ray-taken.min.js');

Args = ["abcd", 1234, 12345, "abcde", "abc", 12, function x(){console.log("kle")}, function y(){console.log("Hale")}, {name:"ry", age:25}, {name:"anna", age:27}];

ArgsB = [12345, "abcd", "abc",
         "Hale", "abcde", "/dale",
	 "/hale", "vale/", "tail/",
         "kale.exe", "/home/ray/package.json", "/home/tail/node_modules/",
         "D:\ray\tail.json", "C:\tail\ray.json"];

let urlArgs = taken
  .take(ArgsB)
  .getAbsUnixPaths()
  .value;

console.log(urlArgs);

let urlWinArgs = taken
  .take(ArgsB)
  .getAbsWinPaths()
  .value;

console.log(urlWinArgs);

let absPaths = taken
  .take(ArgsB)
  .getAbsPaths()
  .value;

console.log(absPaths);

let fileArgs = taken
  .take(ArgsB)
  .getFileNames()
  .value;

console.log(fileArgs);


let dirArgs = taken
  .take(ArgsB)
  .getDirNames()
  .value;

console.log(dirArgs);

let nodeArgs = taken
  .take(ArgsB)
  .getNodeNames()
  .value;

console.log(nodeArgs);

let newArgs = taken
  .take(Args)
  .getArgsOfType("number")
  .value;

console.log(newArgs);
 // Works as intended


newArgs = taken
  .take(Args)
  .getArgsOfType("string")
  .union(ArgsB)
  .value;

console.log(newArgs);
 //working as intended


newArgs = taken
  .take(Args)
  .intersection(ArgsB)
  .value;

console.log(newArgs);
 // working as intended


newArgs = taken
  .take(Args)
  .subtraction(ArgsB)
  .value;

console.log(newArgs);
 //working as intended


newArgs = taken
 .take(Args)
 .getArgsOfRegex(/^([0-9]{4})/)
 .value;

console.log(newArgs);



newArgs = taken
  .take(Args)
  .getPortNums()
  .value;

console.log(newArgs);

