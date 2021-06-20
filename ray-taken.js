const raytakenAuthors = "Ray Voice and Anna Voice";
const raytakenVersion = "1.0.1";

module.exports = {
  value: [],
  logTypes: ["number", "string", "object", "function",
	     "boolean", "undefined", "symbol", "bigint"],
  commonRegex: [/\w/, /\d/, , /^\w/, /^http:/, /^https:/],
  take: function(argsArray) {
    this.value = argsArray;
    return this;
  },
  getArgsOfType: function(dataType) {
    const argsOfType = [];
    this.overArray(this.value, (item)=>{
      if (typeof(item) === dataType) argsOfType.push(item);
    });
    this.value = argsOfType;
    return this;
  },
  overArray: function(arr, callback) {
    for (let item of arr) {
      callback(item);
    }
    return this;
  },
  union: function(argsB) {
    this.overArray(argsB, (itemB)=>{ this.value.push(itemB) });
    return this;
  },
  subtraction: function(argsB) {
    this.overArray(argsB, (itemB)=>{
      this.value = this.value.filter(valB => valB !== itemB)
    });
    return this;
  },
  intersection: function(argsB) {
    const intersectingSet = [];
    this.overArray(argsB, (itemB) => {
      if(this.value.includes(itemB)) return intersectingSet.push(itemB)
    });
    this.value = intersectingSet;
    return this;
  },
  getArgsOfRegex: function(regex) {
    const regexedArray = [];
    this.overArray(this.value, (item)=>{
      if(regex.test(item) && typeof(item) !== "function" && typeof(item) !== "object") regexedArray.push(item);
    });
    this.value = regexedArray;
    return this;
  },
  getNumArgs: function() {
    this.value = this.getArgsOfType("number").value;
    return this;
  },
  getStrArgs: function() {
    this.value = this.getArgsOfType("string").value;
    return this;
  },
  getFuncArgs: function() {
    this.value = this.getArgsOfType("function").value;
    return this;
  },
  getObjArgs: function() {
    this.value = this.getArgsOfType("object").value;
    return this;
  },
  getBoolArgs: function() {
    this.value = this.getArgsOfType("boolean").value;
    return this;
  },
  getPortNums: function() {
    const numbers = this.getNumArgs().value;
    this.value = numbers.filter(item => (item > 1));
    //need to imporve this function
    return this;
  }
}

