'use strict'

const wrapLog = function (callback, name) {
  /* your code here */
  return function(num1, num2) {
    const total = callback(num1, num2);
    console.log(`${name}(${num1},${num2}) => ${total}`);
  }
};

const sum = function (a,b) { return a + b; };
const logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
