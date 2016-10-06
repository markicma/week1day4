'use strict';

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(function(elm) {
  return Math.sqrt(((elm.x)*(elm.x)) + ((elm.y)*(elm.y)))
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
