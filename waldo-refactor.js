'use strict';

// Two possible ways to refactor implementing the forEach loop

// The first way using the forEach in the function findWaldo
const findWaldo = function(arr, found) {
  arr.forEach(function(elm, i) {
    if (elm === "Waldo") {
      found(i);
    }
  })
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// The second way using one function findWaldo2 but applying the
// forEach to the end of the array and using a callback to reference
// findWaldo2

const findWaldo2 = function(elm, index) {
  if (elm === "Waldo") {
    console.log(`Found Waldo at index ${index}!`)
  }
};

["Alice", "Bob", "Waldo", "Winston"].forEach(findWaldo2);
