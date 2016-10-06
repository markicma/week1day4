'use strict'

const map = function(arr, _length) {
  let output = [];
  arr.forEach(function(elm) {
    output.push(_length(elm));
  });
  return output;
};

const results = map(["ground", "control", "to", "major", "tom"], function(elm) {
  return elm.length
});

console.log(results);
