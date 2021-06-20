# ray-taken
A arguments extractor for ray-userland. Use this library to become careless about your arguments! A very good library to work with Arrays too!


# Installation
Use the following command to install with NPM:
```
npm i ray-taken --save 
```

Import as `taken`:
```javascript
const taken = require('ray-taken');
```

# Usage
```
const taken = require('ray-taken');

const newArray = taken
                   .take([1,2,3, "a", "b", "xyz"])
		   .getArgsOfType("number")
		   .value;

console.log(newArray); // logs [1,2,3]
```

Methods available:
1. `logTypes`: Returns an Array of dataTypes available.

2. `commonRegex`: Returns an Array of commonly used Regex Patterns.

3. `take(myArray)`: Takes an array. Same as `taken.value = myArray`. We always need to take an array in question to begin working with it!

4. `getArgsOfType(dataType)`: Takes a string like "number", "string", "function", "object", "undefined", etc. and returns all items of that data-type.

5. `overArray(Array, callback)`: Goes over each item of an array, passing the said item to the provided callback function.

6. `union(ArrayB)`: Performs the logical union operation on the "taken" Array and the provided "ArrayB". Like "AUB"!

7. `subtraction(ArrayB)`: Performs the logical subtraction operation.

8. `intersection(argsB)`: Performs the logical intersection operation.

9. `getArgsOfRegex(regex)`: Gets all the items of the "taken" Array that match the provided "regex".

10. `getNumArgs()`: Gets all the items of the "taken" Array that are numbers.

11. `getStrArgs()`: Gets all the items of the "taken" Array that are strings.

12. `getFuncArgs()`: Gets all the items of the "taken" Array that are functions.

13. `getObjArgs()`: Gets all the items of the "taken" Array that are Objects, including `null` and other non-primitive dataTypes and non-functions (has a .call()).

14. `getBoolArgs()`: Gets all the items of the "taken" Array that are Booleans. 

15. `getPortNums()`: Gets all the items of the "taken" Array that are port numbers.

16. More comming soon!

To find the values of these methods use the `.value` property, all methods are chainable, hence return their parent object.

# License
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
