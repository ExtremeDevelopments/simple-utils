const assignDefaultValues = require("./functions/Objects/AssignDefaultValues");
const capitalizeEveryWord = require("./functions/Strings/CapitalizeEveryWord");
const decapitalizeEveryWord = require("./functions/Strings/DecapitalizeEveryWord");
const getDifference = require("./Arrays/GetDifference");

console.log(capitalizeEveryWord('hi how are you'))
console.log(decapitalizeEveryWord('Hi How Are You'))
console.log(assignDefaultValues({ a: 52 }, { b: 69}, { b: 6}, { a: 2 }))
console.log(getDifference([1, 2, 3], [1, 2, 4 ]))