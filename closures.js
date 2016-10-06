'use strict';

// First loaded die exercise using closures
const loadedDie = (function () {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let counter = -1;
    return function(){
      counter++;
      return list[counter];
    };
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6

// Second countdown exercise using closures

const countdownGenerator = function (x) {
  /* your code here */
  return function() {
    if (x > 0) {
      console.log(`T-minus ${x}...`);
    }
    else if (x === 0) {
      console.log("Blast Off!");
    }
    else {
      console.log("Rockets already gone, bub!");
    }
    x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
