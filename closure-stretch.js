'use strict'

const wrapLog = function (callback, name) {
  /* your code here */
  return function() {
    console.log(`${name}(${arguments[0]},${arguments[1]}) => ${callback(arguments[0], arguments[1])}`);
  }
};

const sum = function (a,b) { return a + b; };
const logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
